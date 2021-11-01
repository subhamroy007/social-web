import { createAsyncThunk } from "@reduxjs/toolkit";
import { getImagePostFeed } from "../../utility/clients/imagePostClient";
import {
  AppError,
  ImageFeedScreenResponse,
} from "../../utility/types/api_types";
import { AppDispatch, RootState } from "../appStore";

export interface ImageFeedRequest {
  pageNo: number;
  storyFeedRequest: boolean;
  imageFeedRequest: boolean;
}

export type ImageFeedRequestConfig = {
  /** return type for `thunkApi.getState` */
  state: RootState;
  /** type for `thunkApi.dispatch` */
  dispatch: AppDispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue: AppError;
  /** return type of the `serializeError` option callback */
  serializedErrorType: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta: any;
};

const getImageFeedThunk = createAsyncThunk<
  ImageFeedScreenResponse,
  ImageFeedRequest,
  ImageFeedRequestConfig
>(
  "ImagePost/feed",
  async (arg, thunkApi) => {
    try {
      const userData = thunkApi.getState().userProfile;

      const responseData = await getImagePostFeed(
        arg.storyFeedRequest,
        arg.imageFeedRequest,
        arg.pageNo,
        {
          "user-id": userData.userId,
          token: userData.toke,
        }
      );

      return responseData;
    } catch (error: any) {
      const responseData = error as AppError;
      return thunkApi.rejectWithValue(error, {});
    }
  },
  {
    dispatchConditionRejection: false,
  }
);

export { getImageFeedThunk };
