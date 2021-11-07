import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TAG_BORDER_RADIUS_RATIO,
  TAG_GAP_RAIO,
  TAG_IMAGE_SIZE_RATIO,
  TAG_TEXT_SIZE_RATIO,
  WINDOW_WIDTH,
} from "../utility/constants/appConstants";
import { RegularText } from "../utility/ui/appText";

export interface TagProp {
  id: string;
  style?: StyleProp<ViewStyle>;
}

const Tag = ({ id, style }: TagProp) => {
  const tagImageSource: Source = useMemo(
    () => ({
      cache: "immutable",
      priority: "high",
      uri: "https://source.unsplash.com/random/150x150",
    }),
    []
  );

  return (
    <SafeAreaView edges={[]} style={[styles.tagContainer, style]}>
      <FastImage
        source={tagImageSource}
        resizeMode="cover"
        style={styles.tagImageStyle}
      />
      <RegularText
        style={styles.tagTextStyle}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {id}
      </RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    paddingHorizontal: TAG_GAP_RAIO * WINDOW_WIDTH,
    paddingVertical: TAG_GAP_RAIO * WINDOW_WIDTH,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(41, 40, 40, 0.8)",
    borderRadius: TAG_BORDER_RADIUS_RATIO * WINDOW_WIDTH,
  },
  tagImageStyle: {
    width: WINDOW_WIDTH * TAG_IMAGE_SIZE_RATIO,
    height: WINDOW_WIDTH * TAG_IMAGE_SIZE_RATIO,
    borderRadius: WINDOW_WIDTH * TAG_IMAGE_SIZE_RATIO * 0.5,
  },
  tagTextStyle: {
    color: "white",
    fontSize: TAG_TEXT_SIZE_RATIO * WINDOW_WIDTH,
    marginHorizontal: WINDOW_WIDTH * TAG_GAP_RAIO,
  },
});

export default Tag;
