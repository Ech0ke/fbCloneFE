import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
