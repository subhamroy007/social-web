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
        <Icon onPress={() => {}}>
          {(iconDefaultProps) => (
            <CustomIcon
              name="heart-outline"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
              {...iconDefaultProps}
            />
          )}
        </Icon>
        <Icon onPress={() => {}}>
          {(iconDefaultProps) => (
            <CustomIcon
              name="comment-outline"
              size={48}
              color="black"
              style={{ marginLeft: 24 }}
              {...iconDefaultProps}
            />
          )}
        </Icon>
        <Icon onPress={() => {}}>
          {(iconDefaultProps) => (
            <CustomIcon
              name="send"
              size={24}
              color="black"
              style={{ marginLeft: 24 }}
              {...iconDefaultProps}
            />
          )}
        </Icon>
      </SafeAreaView>
      <Icon onPress={() => {}}>
        {(iconDefaultProps) => (
          <CustomIcon
            name="bookmark-outline"
            size={24}
            color="black"
            {...iconDefaultProps}
          />
        )}
      </Icon>
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
