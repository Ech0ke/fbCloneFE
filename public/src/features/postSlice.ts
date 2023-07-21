import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { type } from "os";
import { Post } from "@/types/PostType";

type postState = {
  value: Array<Post>;
};

const initialState: postState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
