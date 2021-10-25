import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "./Icon";
import { AntDesign, EvilIcons, Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

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
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </Icon>
        <Icon onPress={() => {}}>
          <EvilIcons
            name="comment"
            size={34}
            color="black"
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            maxFontSizeMultiplier={2.0}
            minimumFontScale={0.5}
            style={{ marginLeft: 24 }}
          />
        </Icon>
        <Icon onPress={() => {}}>
          <Ionicons
            name="share-outline"
            size={28}
            color="black"
            style={{ marginLeft: 24 }}
          />
        </Icon>
      </SafeAreaView>
      <Icon onPress={() => {}}>
        <Feather name="bookmark" size={28} color="black" />
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
