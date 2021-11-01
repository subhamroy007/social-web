import { AppError, ImageFeedScreenResponse } from "../types/api_types";

const getImagePostFeed = async (
  hasStoryFeed: boolean,
  hasImageFeed: boolean = true,
  pageNo: number = 0,
  customHeaders: HeadersInit
) => {
  try {
    const response = await fetch(
      `https://mockapi/imagepostfeed/${hasImageFeed ? "hasimagefeed" : ""}/${
        hasStoryFeed ? "hasstoryfeed" : ""
      }?pageNo=${pageNo}`,
      {
        method: "GET",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          ...customHeaders,
          "Content-Type": "application/json",
        },
        keepalive: true,
      }
    );

    const responseBody = (await response.json()) as ImageFeedScreenResponse;

    return responseBody;
  } catch (e: any) {
    console.log("error happend while fetching image feed response");
    const responseBody: AppError = {
      code: 1000,
      message: "unable to refresh feed",
    };
    throw responseBody;
  }
};

export { getImagePostFeed };
