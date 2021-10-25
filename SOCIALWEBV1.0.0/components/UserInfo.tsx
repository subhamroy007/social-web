import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { MediumText, RegularText } from "../utility/ui/appText";
import Avatar from "./Avatar";

export interface UserInfoProps {
  url: string;
  primaryText: string;
  secondaryText: string;
}

const UserInfo = (props: UserInfoProps) => {
  const primaryTextStyle: StyleProp<TextStyle> = {
    fontSize: 16,
    ...globalColors.userInfoPrimaryTextColor,
  };
  const secondaryTextStyle: StyleProp<TextStyle> = {
    fontSize: 12,
    ...globalColors.userInfoSecondaryTextColor,
  };

  return (
    <SafeAreaView
      edges={[]}
      style={[globalColors.userInfoContainerColor, styles.userInfoContainer]}
    >
      <Avatar size={48} url={props.url} />
      <SafeAreaView edges={[]} style={[styles.textContainer]}>
        <MediumText style={primaryTextStyle}>{props.primaryText}</MediumText>
        <RegularText style={secondaryTextStyle}>
          {props.secondaryText}
        </RegularText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    padding: 4,
  },
  textContainer: {
    marginLeft: 4,
  },
});

export default UserInfo;
