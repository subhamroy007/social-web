import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon, { IconProps } from "./Icon";
import { AntDesign, EvilIcons, Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { CustomIcon } from "../utility/ui/appIcon";

const ImageFeedPostControls = () => {
  return (
    <SafeAreaView
      style={[styles.imageFeedPostControlsMainContainer]}
      edges={[]}
    >
      <SafeAreaView
        style={[styles.imageFeedPostControlsSubContainer]}
        edges={[]}
      >
        <Icon color="black" name="heart-outline" size={24} />
        <Icon color="black" name="comment-outline" size={24} />
        <Icon color="black" name="send" size={24} />
      </SafeAreaView>
      <Icon color="black" name="bookmark-outline" size={24} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedPostControlsMainContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  imageFeedPostControlsSubContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ImageFeedPostControls;
