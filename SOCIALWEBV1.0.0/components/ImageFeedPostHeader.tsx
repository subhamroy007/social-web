import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "./Icon";
import UserInfo from "./UserInfo";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { globalColors } from "../utility/style/colors";
import { CustomIcon } from "../utility/ui/appIcon";

const ImageFeedPostHeader = () => {
  return (
    <SafeAreaView
      style={[
        globalColors.imageFeedPostHeaderContainerColor,
        styles.imageFeedPostHeaderContainer,
      ]}
      edges={["left", "right"]}
    >
      <UserInfo
        url="https://static.india.com/wp-content/uploads/2021/03/Bollywood-Actress-Alia-Bhatt.jpg"
        primaryText="roybond007"
        secondaryText="30m"
      />
      <Icon color="black" name="more-option" size={24} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedPostHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 6,
  },
});

export default ImageFeedPostHeader;
