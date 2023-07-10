import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex-grow h-full pt-6 mx-4 overflow-y-auto mb-4">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
