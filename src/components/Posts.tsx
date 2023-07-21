import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../../public/src/features/postSlice";
import axios from "axios";
import apiUrls from "@/api/ApiUrls";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    const fetchPosts = () => {
      const response = axios
        .get(apiUrls.FACEBOOK_CLONE_GET_POSTS)
        .then((response) => {
          dispatch(addAllPost(response.data));
        });
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
