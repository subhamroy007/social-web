import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  USER_INFO_PRIMARY_TEXT_SIZE,
  USER_INFO_SECONDARY_TEXT_SIZE,
} from "../utility/constants/appConstants";
import { globalColors } from "../utility/style/colors";
import { MediumText, RegularText } from "../utility/ui/appText";
import Avatar from "./Avatar";

export interface UserInfoProps {
  url: string;
  primaryText: string;
  secondaryText: string;
}

const UserInfo = (props: UserInfoProps) => {
  return (
    <SafeAreaView
      edges={[]}
      style={[globalColors.userInfoContainerColor, styles.userInfoContainer]}
    >
      <Avatar size={24} url={props.url} />
      <SafeAreaView edges={[]} style={[styles.textContainer]}>
        <MediumText
          style={[globalColors.userInfoPrimaryTextColor, styles.primaryText]}
        >
          {props.primaryText}
        </MediumText>
        <RegularText
          style={[
            globalColors.userInfoSecondaryTextColor,
            styles.secondaryText,
          ]}
        >
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
  primaryText: {
    fontSize: USER_INFO_PRIMARY_TEXT_SIZE,
  },
  secondaryText: {
    fontSize: USER_INFO_SECONDARY_TEXT_SIZE,
  },
});

export default UserInfo;
