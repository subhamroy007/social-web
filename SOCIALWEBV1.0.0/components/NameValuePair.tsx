import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  NAME_VALUE_PAIR_NAME_FONT_SIZE,
  NAME_VALUE_PAIR_VALUE_FONT_SIZE,
} from "../utility/constants/appConstants";
import { NameValuePairProps } from "../utility/types/other_types";
import { RegularText } from "../utility/ui/appText";

const NameValuePair = (props: NameValuePairProps) => {
  return (
    <SafeAreaView edges={[]} style={[styles.container, props.style]}>
      <RegularText
        style={[styles.valueText]}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {props.value}
      </RegularText>
      <RegularText
        style={[styles.nameText]}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {props.name}
      </RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  nameText: {
    fontSize: NAME_VALUE_PAIR_NAME_FONT_SIZE,
  },
  valueText: {
    fontSize: NAME_VALUE_PAIR_VALUE_FONT_SIZE,
  },
});

export default NameValuePair;
