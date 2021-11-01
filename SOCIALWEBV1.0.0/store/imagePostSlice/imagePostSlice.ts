import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  CommentResponse,
  ImagePostResponse,
  ReplyResponse,
} from "../../utility/types/api_types";
import {
  Comment,
  ImagePost,
  ImagePostMetaState,
  Reply,
  taskState,
} from "../../utility/types/store_types";
import { RootState } from "../appStore";
import { getImageFeedThunk } from "./imagePostReducer";

//mapping function that converts a ReplyResponse to corresponding Reply type
const replyResponseToReplyMapper = (data: ReplyResponse): Reply => {
  const result: Reply = {
    id: data.id,
    author: data.author.id,
    content: data.content,
    timestamp: data.timestamp,
    likeInfo: {
      noOfLikes: data.likeInfo.noOfLikes,
      likeList: data.likeInfo.likeList?.map((item) => ({
        id: item.userInfo.id,
        timestamp: item.timestamp,
      })),
    },
  };
  return result;
};

//mapping function that converts a CommentResponse to correspoding Comment type
const commentResponseToCommentMapper = (data: CommentResponse): Comment => {
  const result: Comment = {
    id: data.id,
    author: data.author.id,
    content: data.content,
    likeInfo: {
      noOfLikes: data.likeInfo.noOfLikes,
      likeList: data.likeInfo.likeList?.map((item) => ({
        id: item.userInfo.id,
        timestamp: item.timestamp,
      })),
    },
    timestamp: data.timestamp,
    replyInfo: {
      noOfReply: data.replyInfo.noOfReply,
      replyList: data.replyInfo.replyList?.map((item) =>
        replyResponseToReplyMapper(item)
      ),
    },
  };

  return result;
};

//mapping function that converts a ImagePostResponse to correspoding ImagePost type
const imagePostResponseToImagePostMapper = (
  data: ImagePostResponse
): ImagePost => {
  const result: ImagePost = {
    author: data.author.id,
    caption: data.caption,
    content: data.content,
    id: data.id,
    commentInfo: {
      noOfComments: data.commentInfo.noOfComments,
      filteredUsers: data.commentInfo.filteredUsers,
      commentList: data.commentInfo.commentList?.map((item) =>
        commentResponseToCommentMapper(item)
      ),
    },
    likeInfo: {
      noOfLikes: data.likeInfo.noOfLikes,
      likeList: data.likeInfo.likeList?.map((item) => ({
        id: item.userInfo.id,
        timestamp: item.timestamp,
      })),
      filteredUsers: data.likeInfo.filteredUsers,
    },
    hashtagList: data.hashtagList,
    timestamp: data.timestamp,
    shareInfo: {
      noOfShares: data.shareInfo.noOfShares,
      shareList: data.shareInfo.shareList?.map((item) => ({
        id: item.userInfo.id,
        timestamp: item.timestamp,
      })),
      filteredShareList: data.shareInfo.filteredShareList,
    },
    tagInfo: {
      noOfTags: data.tagInfo.noOfTags,
      tagList: data.tagInfo.tagList?.map((item) => item.id),
    },
  };
  return result;
};

//initial image post entity meta data
const imagePostInitialMetaState: ImagePostMetaState = {
  imagePostFeedMeta: {
    currentFeedPageNo: -1,
    feedList: [],
    feedState: "idle",
  },
};

//declearing a normalized ImagePost entity
const ImagePostEntity = createEntityAdapter<ImagePost>({
  selectId: (model) => model.id,
  sortComparer: (model1, model2) => model1.timestamp - model2.timestamp,
});

//declaring the image post slice that is going to create all the corresponding reducers and action-creators
const imagePostSlice = createSlice({
  name: "ImagePost",
  initialState: ImagePostEntity.getInitialState({ imagePostInitialMetaState }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImageFeedThunk.pending, (state, action) => {
        //make the feed state to loading so that any consuming component can act on it
        state.imagePostInitialMetaState.imagePostFeedMeta.feedState = "loading";
      })
      .addCase(getImageFeedThunk.fulfilled, (state, action) => {
        //make the feed state to success so that any consuming component can fetch the new data
        state.imagePostInitialMetaState.imagePostFeedMeta.feedState = "success";

        const imagePostFeedResult = action.payload.imagePostFeedInfo;
        if (imagePostFeedResult) {
          //update the current requested feed page no
          state.imagePostInitialMetaState.imagePostFeedMeta.currentFeedPageNo =
            imagePostFeedResult.pageInfo.pageNo;

          const imagePostFeedListResult = imagePostFeedResult.list;
          // if new data is available in the current page map them to corresponding ImagePost type
          //and add them to the image post entity
          if (
            imagePostFeedListResult &&
            imagePostFeedResult.pageInfo.pageLength > 0
          ) {
            const feedList: ImagePost[] = [];
            imagePostFeedListResult.forEach((item) => {
              state.imagePostInitialMetaState.imagePostFeedMeta.feedList.push(
                item.id
              );
              feedList.push(imagePostResponseToImagePostMapper(item));
            });
            ImagePostEntity.addMany(state, feedList);
          }
        }
      })
      .addCase(getImageFeedThunk.rejected, (state, action) => {
        //make the feed state to failure so that any consuming component can act on it
        state.imagePostInitialMetaState.imagePostFeedMeta.feedState = "failure";
        //update the recently encountered error field with current one
        if (action.payload) {
          state.imagePostInitialMetaState.imagePostFeedMeta.recentError = {
            code: action.payload.code,
            message: action.payload.message,
          };
        }
      });
  },
});

const imagePostReducer = imagePostSlice.reducer;

export default imagePostSlice;

export const {
  selectAll: selectAllImagePost,
  selectById: selectByIdImagePost,
  selectEntities: selectEntitiesImagePost,
  selectIds: selectIdsImagePost,
  selectTotal: selectTotalImagePost,
} = ImagePostEntity.getSelectors<RootState>((state) => state.imagePost);

export const selectImagePostFeedState = createSelector<
  RootState,
  taskState,
  taskState
>(
  (state) =>
    state.imagePost.imagePostInitialMetaState.imagePostFeedMeta.feedState,
  (feedState) => feedState
);

export const selectImagePostFeedList = createSelector<
  RootState,
  string[],
  string[]
>(
  (state) =>
    state.imagePost.imagePostInitialMetaState.imagePostFeedMeta.feedList,
  (feedList) => feedList
);

export { imagePostReducer };
