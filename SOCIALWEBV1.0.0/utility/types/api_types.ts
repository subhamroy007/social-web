import { ImageInfo, ImagePost, Story } from "./store_types";

//a utility type to represent user data
export interface UserInfoResponse {
  id: string;
  socialId: string;
  username: string;
  profilePictureUrl: string;
}

//a speicific story data response
export interface StoryInfoResponse {
  id: string;
  timestamp: number;
  content: {
    url: string;
  };
  hasSeen: boolean;
}

//full response of a of specific user story data
export interface StoryResponse {
  userInfo: UserInfoResponse; //target user info
  storyList: Story[]; //list of active stories
}

//a utility type to represent page data
export interface PageInfoResponse {
  pageNo: number;
  pageSize: number;
  pageLength: number;
  totalNoOfPages: number;
}

//a utility type to represent user information along with an arbitrary timestamp
export interface UserInfoWithTimeStampResponse {
  userInfo: UserInfoResponse;
  timestamp: number;
}

//paginated story feed response
export interface StoryFeedResponse {
  pageInfo: PageInfoResponse;
  list?: StoryResponse[];
}

//a specific reply data response
export interface ReplyResponse {
  id: string;
  content: string;
  author: UserInfoResponse;
  timestamp: number;
  likeInfo: {
    noOfLikes: number;
    pageInfo: PageInfoResponse;
    likeList?: UserInfoWithTimeStampResponse[];
  };
}

// a specific comment data response
export interface CommentResponse extends ReplyResponse {
  replyInfo: {
    noOfReply: number;
    pageInfo: PageInfoResponse;
    replyList?: ReplyResponse[];
  };
}

//a specific image post response
export interface ImagePostResponse {
  id: string;
  content: ImageInfo[] | ImageInfo;
  caption?: string;
  timestamp: number;
  author: UserInfoResponse;
  hashtagList?: string[];
  likeInfo: {
    noOfLikes: number;
    likeList?: UserInfoWithTimeStampResponse[];
    pageInfo: PageInfoResponse;
    filteredUsers?: string[];
  };
  commentInfo: {
    noOfComments: number;
    commentList?: CommentResponse[];
    pageInfo: PageInfoResponse;
    filteredUsers?: string[];
  };
  shareInfo: {
    noOfShares: number;
    shareList?: UserInfoWithTimeStampResponse[];
    pageInfo: PageInfoResponse;
    filteredShareList?: string[];
  };
  tagInfo: {
    noOfTags: number;
    pageInfo: PageInfoResponse;
    tagList?: UserInfoResponse[];
  };
}

//paginated image feed response
export default interface ImagePostFeedResponse {
  pageInfo: PageInfoResponse;
  list?: ImagePostResponse[];
}

//full response of image feed screen loading data
export interface ImageFeedScreenResponse {
  storyFeedInfo?: StoryFeedResponse;
  imagePostFeedInfo?: ImagePostFeedResponse;
}

//a utility type to create custom errors in the app
export interface AppError {
  code: number;
  message: string;
  reasons?: {
    [key: string]: string;
  };
}
