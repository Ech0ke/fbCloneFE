import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

function Post() {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
            width={40}
            height={40}
            alt="Facebook user profile icon"
            className="rounded-full"
          />
          <div>
            <p className="font-medium">Aidas Žygas</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum
          velit aut, consectetur dolorem, porro atque autem maiores dolorum
          facere officiis, recusandae accusamus unde inventore vero odio eaque
          et repellendus corporis cum laboriosam! Beatae consectetur sit ad,
          nobis aut fuga laboriosam doloremque dignissimos nisi incidunt omnis
          quis quibusdam voluptatibus perspiciatis. Ut eum minima quos ullam
          alias, expedita praesentium non nulla maxime obcaecati quidem tempore
          cum libero, corporis, recusandae voluptas nisi debitis suscipit labore
          enim! Consequatur porro distinctio iure animi quisquam!
        </p>
      </div>
      {/* If any Image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/16952091/pexels-photo-16952091/free-photo-of-wood-landscape-field-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
