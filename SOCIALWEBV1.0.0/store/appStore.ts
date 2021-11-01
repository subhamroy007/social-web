import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { imagePostReducer } from "./imagePostSlice/imagePostSlice";
import { storyReducer } from "./storySlice/storySlice";
import { userProfileReducer } from "./userProfileSlice/userProfileSlice";
import { userReducer } from "./userSlice/userSlice";

//creating a single store for the entire app
const appStore = configureStore({
  reducer: {
    imagePost: imagePostReducer, //reducer slice that interacts with the ImagePostEntity
    user: userReducer, //reducer slice that interacts with the UserEntity
    story: storyReducer, //reducer slice that interacts with the StoryEntity
    userProfile: userProfileReducer, //reducer slice that interacts with UserProfileEntity
  },
  // devTools: false, //devtools extension is unnesessary
  // enhancers: [], //no enhancers are added at the moment
  // middleware: (getDefaultMiddleware) => {
  //   //only default thunk, immutability and serialization middlewere are added at the moment
  //   return getDefaultMiddleware();
  // },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default appStore;
