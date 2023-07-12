import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
type postState = {
  value: Array<object | null>;
};

const initialState: postState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    addAllPost: (state, action) => {},
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
