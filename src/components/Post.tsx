import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { Post } from "@/types/PostType";

type PostProps = {
  post: Post;
};

function Post({ post }: PostProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const date: Date = new Date();
    setFormattedDate(date.toLocaleString());
  }, []);

  return (
    <div className="flex flex-col" key={post?.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            src={post.profilePic}
            width={40}
            height={40}
            alt="Facebook user profile icon"
            className="rounded-full"
          />
          <div>
            <p className="font-medium">Aidas Žygas</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {/* If any Image */}
      {post.file != null && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src={post.file}
            layout="fill"
            className="object-cover"
            objectFit="cover"
            alt="Post image"
          />{" "}
        </div>
      )}

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
