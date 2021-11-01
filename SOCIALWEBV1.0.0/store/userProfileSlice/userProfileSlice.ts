import { createSlice } from "@reduxjs/toolkit";

export interface UserProfile {
  userId: string;
  toke: string;
  expiryTimestamp: number;
}

const UserProfileEntity: UserProfile = {
  userId: "",
  toke: "",
  expiryTimestamp: 0,
};

const userProfileSlice = createSlice({
  name: "UserProfile",
  initialState: UserProfileEntity,
  reducers: {},
  extraReducers: {},
});

const userProfileReducer = userProfileSlice.reducer;

export default userProfileSlice;

export { userProfileReducer };
