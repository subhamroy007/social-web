import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SHUTTER_BODY_LIST_ITEM_HEIGHT,
  SHUTTER_ICON_HORIZONTAL_MARGIN,
  SHUTTER_ICON_SIZE,
  SHUTTER_ICON_VERTICAL_MARGIN,
  WINDOW_WIDTH,
} from "../utility/constants/appConstants";
import RoundedIcon from "./RoundedIcon";

const ShutterBodyListItem = () => {
  return (
    <SafeAreaView edges={[]} style={[styles.itemContainer]}>
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="tag"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="more-option"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="tag"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="more-option"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="tag"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
      <RoundedIcon
        color="black"
        dragEnabled={false}
        name="more-option"
        tapEnabled={false}
        size={SHUTTER_ICON_SIZE}
        style={{
          marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
          marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: WINDOW_WIDTH,
    height: SHUTTER_BODY_LIST_ITEM_HEIGHT,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: SHUTTER_ICON_HORIZONTAL_MARGIN,
    paddingBottom: SHUTTER_ICON_VERTICAL_MARGIN,
  },
});

export default ShutterBodyListItem;
