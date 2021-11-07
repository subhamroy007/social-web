import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageFeedPostHeader from "../components/ImageFeedPostHeader";
import ImageFeedPostControls from "../components/ImageFeedPostControls";
import ImageFeedSinglePost from "../components/ImageFeedSinglePost";
import { StyleSheet } from "react-native";
import CollapsibleText from "./CollapsibleText";

const ImageFeedPost = (props: { id: string }) => {
  const height = Math.floor(Math.random() * 400) + 100;
  const width = Math.floor(Math.random() * 400) + 100;

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.imageFeedPostContainer]}
    >
      <ImageFeedPostHeader />
      <ImageFeedSinglePost
        url={`https://source.unsplash.com/random/${width}x${height}`}
        width={width}
        height={height}
      />
      <ImageFeedPostControls />
      <CollapsibleText
        content="hello this is a demo capton to chek the visibility of captions 
        in full screen mode of the image post and it is quite allright
        this is the best app on the group of social media
        and i am new here but already amused with this app :)"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedPostContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default ImageFeedPost;
