import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "./Icon";
import UserInfo from "./UserInfo";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { globalColors } from "../utility/style/colors";

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
      <Icon onPress={() => console.log("pressed")}>
        <Feather name="more-vertical" size={24} color="black" />
      </Icon>
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
