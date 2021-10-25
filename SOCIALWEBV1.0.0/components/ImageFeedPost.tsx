import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageFeedPostHeader from "../components/ImageFeedPostHeader";
import ImageFeedPostControls from "../components/ImageFeedPostControls";
import ImageFeedSinglePost from "../components/ImageFeedSinglePost";
import { StyleSheet } from "react-native";

const ImageFeedPost = () => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.imageFeedPostContainer]}
    >
      <ImageFeedPostHeader />
      <ImageFeedSinglePost
        url="https://cdn.vox-cdn.com/thumbor/Fkp_wL_RY7DO3sQ8Vk8WmU9Ouz8=/0x0:3840x2560/1400x1400/filters:focal(2491x490:3105x1104):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55644669/spider_man_homecoming_tony_peter_3840.0.jpg"
        height={1400}
        width={1400}
      />
      <ImageFeedPostControls />
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
