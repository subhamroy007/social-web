import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import ImageFeedPost from "../components/ImageFeedPost";

const ImageFeedScreen = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
      edges={["left", "right"]}
    >
      <ImageFeedPost />
    </SafeAreaView>
  );
};

export default ImageFeedScreen;
