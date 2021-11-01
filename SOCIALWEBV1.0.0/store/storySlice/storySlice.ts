import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Story } from "../../utility/types/store_types";

//defining normalized version of StoryEntity
const StoryEntity = createEntityAdapter<Story>({
  selectId: (model) => model.id,
  sortComparer: (model1, model2) => model1.timestamp - model2.timestamp,
});

//defining story slice
const storySlice = createSlice({
  name: "Story",
  initialState: StoryEntity.getInitialState(),
  reducers: {},
  extraReducers: {},
});

const storyReducer = storySlice.reducer;

export default storySlice;
export { storyReducer };
