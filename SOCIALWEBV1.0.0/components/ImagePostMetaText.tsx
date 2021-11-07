import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoldText, MediumText, RegularText } from "../utility/ui/appText";
import Icon from "./Icon";

export interface ImagePostMetaTextProps {
  //number of data that this component represent it can be any countable metadeta i.e. like, comment, sends etc
  numberOfData: number;
  //a string of references (usually userid) associalted to the meta deta
  filteredReference?: string[];
  //icon
  icon: {
    name: string;
    size: number;
    color: string;
  };
  //optional style prop
  style?: StyleProp<ViewStyle>;
}

const ImagePostMetaText = ({
  filteredReference,
  numberOfData,
  icon,
  style,
}: ImagePostMetaTextProps) => {
  const referenceText = useMemo(
    () => filteredReference?.join(" "),
    [filteredReference]
  );

  return (
    <SafeAreaView style={[styles.textContainer, style]} edges={[]}>
      <Icon {...icon} />
      {referenceText && (
        <RegularText style={[styles.text]}>
          <MediumText>{referenceText}</MediumText> and{" "}
          <MediumText>{numberOfData} others</MediumText>
        </RegularText>
      )}
      {!referenceText && (
        <BoldText style={[styles.text]}>{numberOfData}</BoldText>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "white",
    marginLeft: 8,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ImagePostMetaText;
