import React, { useRef, useState } from "react";
import Image from "next/image";
import ProfilePicture from "./ProfilePicture";
import Username from "./Username";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

function CreatePost() {
  const username: string = Username({});

  const [imageToPost, setImageToPost] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setImageToPost(e.target?.result as string);
      };
      console.log(selectedFile);
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <ProfilePicture />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, ${username}?`}
            ref={inputRef}
          />
          <button hidden></button>
        </form>
      </div>
      {imageToPost && (
        <div
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
          onClick={removeImage}
        >
          <Image
            src={imageToPost}
            alt="Selected image"
            width={80}
            height={80}
            objectFit="contain"
          />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleFileUploadClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            onChange={addImageToPost}
            type="file"
            ref={hiddenFileInput}
            hidden
            accept="image/*"
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activty</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
