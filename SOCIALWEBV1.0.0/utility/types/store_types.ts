//defining the generic id and timestamp pair interface
export interface IdTimeStampPair {
  id: string; //generic id
  timestamp: number; //generic timestamp
}

//defining the user id avatar url pair interfcae
export interface UseIdAvatarPair {
  id: string; //user id
  url: string; //user profile picture link
}

//generic image info interface
export interface ImageInfo {
  url: string; //url of the image
  width: number; //width of the image in pixels
  height: number; //height of the image in pixels
}

//a datastructure to represent comment reply
export interface Reply {
  id: string; //id of the reply/comment
  content: string; //content of the reply/comment
  author: string; //author user id of the reply/comment
  timestamp: number; //timestamp of creation
  likeInfo: {
    //list of the user ids who liked the comment/reply
    noOfLikes: number;
    likeList?: IdTimeStampPair[];
  };
}

//defining the data structure of Comment
export interface Comment extends Reply {
  replyInfo: {
    noOfReply: number;
    replyList?: Reply[];
  };
}

//utility type to represent any aribtrary task state
export type taskState = "idle" | "success" | "loading" | "failure";

//type to represent additional data of the image post slice
export interface ImagePostMetaState {
  imagePostFeedMeta: {
    //either the image feed is loading or successfully loaded or failed
    feedState: taskState;
    //list of all the post ids that is part of the current user feed
    feedList: string[];
    //most recent feed request page no
    currentFeedPageNo: number;
    //most recent error information encountered when getting new feed information
    recentError?: {
      code: number;
      message: string;
    };
  };
}

//defining the data structure of the ImagePost
export interface ImagePost {
  id: string; //unique id of the post
  content: ImageInfo[] | ImageInfo; //single or multiple string representing the image links
  caption?: string; //caption associated with the post
  timestamp: number; //date when the post created in miliseconds
  author: string; //userId of the post author
  hashtagList?: string[]; //list of hashtag ids used in the post
  likeInfo: {
    //list of the user ids who liked the post
    noOfLikes: number;
    likeList?: IdTimeStampPair[];
    filteredUsers?: string[];
  };
  commentInfo: {
    //list of the comment ids in the post
    noOfComments: number;
    commentList?: Comment[];
    filteredUsers?: string[];
  };
  shareInfo: {
    //list of the use ids who shared the post via diffrent options
    noOfShares: number;
    shareList?: IdTimeStampPair[];
    filteredShareList?: string[];
  };
  tagInfo: {
    noOfTags: number;
    tagList?: string[];
  }; //list of the users tagged in the post
}

//defining User Data Structure
export interface User {
  id: string; //userid
  socialId: string; //unique social id
  username: string; //optional username
  storyInfo: {
    //user story informition
    noOfStories: number; //number of seen and unseen stories
    hasUnSeenStory: boolean; //is the logged in user has yet to see any story of this user
    storyList?: string[]; //id of the stories
  };
  followerInfo: {
    //follower information
    noOfFollowers: number; //total number of followers
    followerList?: string[]; //list of userids
  };
  followingInfo: {
    //following  information
    noOfFollowing: number; //total number of followings
    followingList?: string[]; //list of the userids
  };
  posts: {
    //post information
    noOfPosts: number; //total number of posts
    imagePost: {
      //image post information
      noOfImagePosts: number;
      imagePostList?: string[];
    };
  };
}

//defining the messaage data structure of stories
export interface PrivateStoryMessage {
  id: string;
  content: string;
  timestamp: number;
}

//defining the story data structure
export interface Story {
  id: string;
  author: string;
  timestamp: number;
  content: {
    url: string;
  };
  hasSeen: boolean;
}
