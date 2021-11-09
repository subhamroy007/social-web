import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoldText, RegularText, MediumText } from "../utility/ui/appText";
import Avatar from "./Avatar";

const AvatarUserIdPair = () => {
  return (
    <SafeAreaView edges={[]} style={[styles.container]}>
      <Avatar size={56} url="https://source.unsplash.com/random" />
      <MediumText style={[styles.primaryText]}>roybond007</MediumText>
      <RegularText style={[styles.secondaryText]}>subham</RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  primaryText: {
    fontSize: 14,
  },
  secondaryText: {
    fontSize: 12,
    alignSelf: "flex-start",
  },
});

export default AvatarUserIdPair;
