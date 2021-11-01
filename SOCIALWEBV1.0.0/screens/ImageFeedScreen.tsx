import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React, { useEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import StoryFeed from "../components/StoryFeed";
import ImageFeedItemSeperatorComponent from "../components/ImageFeedItemSeperator";
import { useAppDispatch, useAppSelector } from "../store/appStore";
import {
  selectImagePostFeedList,
  selectImagePostFeedState,
} from "../store/imagePostSlice/imagePostSlice";
import ImageFeedPost from "../components/ImageFeedPost";
import {
  getImageFeedThunk,
  ImageFeedRequest,
} from "../store/imagePostSlice/imagePostReducer";
import Icon from "../components/Icon";
import { CustomIcon } from "../utility/ui/appIcon";

const renderItem = (item: ListRenderItemInfo<string>) => {
  return <ImageFeedPost id={item.item} />;
};

const ImageFeedScreen = () => {
  //get the app dispatch to dispatch the feed request thunk
  const storeDispatch = useAppDispatch();

  //subscribe to the feed state data
  const imagePostFeedState = useAppSelector(selectImagePostFeedState);
  //subscribe to the list of image feed post ids to use it as the data prop of the image feed flat list
  const imagePostFeedList = useAppSelector(selectImagePostFeedList);

  //effect that will only run when the screen loads for thr first time to perform intial setup
  useEffect(() => {
    //function to perform all the initial setup of the image feed screen
    const prepareFeed = () => {
      //since this is the initial feed request both story and image feed will be needed from first page(i.e 0)
      const imageFeedRequest: ImageFeedRequest = {
        pageNo: 0,
        imageFeedRequest: true,
        storyFeedRequest: true,
      };

      //dispatch the thunk and wait for the data to arrive
      storeDispatch(getImageFeedThunk(imageFeedRequest));
    };

    // prepareFeed();
  }, []);

  // if (imagePostFeedState === "loading") {
  //   return; //return the spinner component
  // }

  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
      edges={["left", "right", "bottom"]}
    >
      <FlatList
        data={[]}
        keyExtractor={(item, index) => item}
        renderItem={renderItem}
        style={styles.flatList}
        contentContainerStyle={styles.flastListContent}
        ListHeaderComponent={<StoryFeed />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ImageFeedItemSeperatorComponent}
        initialNumToRender={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: "100%",
  },
  flastListContent: {
    paddingBottom: "16%",
  },
});

export default ImageFeedScreen;
