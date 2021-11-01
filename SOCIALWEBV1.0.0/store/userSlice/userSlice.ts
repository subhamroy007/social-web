import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { User } from "../../utility/types/store_types";

//defining the normalize user entity
const UserEntity = createEntityAdapter<User>({
  selectId: (model) => model.id,
  sortComparer: (model1, model2) =>
    model1.socialId.localeCompare(model2.socialId),
});

//defining the userSlice
const userSlice = createSlice({
  name: "User",
  initialState: UserEntity.getInitialState(),
  reducers: {},
  extraReducers: {},
});

const userReducer = userSlice.reducer;

export default userSlice;

export { userReducer };
