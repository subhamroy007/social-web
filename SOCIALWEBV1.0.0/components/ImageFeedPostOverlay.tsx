import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MediumText, RegularText } from "../utility/ui/appText";

export interface ImageFeedPostOverlayProps {
  width: number;
  height: number;
}

const ImageFeedPostOverlay = (props: ImageFeedPostOverlayProps) => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[{ width: props.width, height: props.height }, styles.overlay]}
    >
      <SafeAreaView edges={[]}>
        <SafeAreaView edges={[]} style={[styles.overlayMetaTextContainer]}>
          <RegularText style={[styles.overlayMetaText]}>
            <MediumText>you</MediumText> and 5643{" "}
            <MediumText>others</MediumText>
          </RegularText>
        </SafeAreaView>
        <SafeAreaView edges={[]} style={styles.overlayMetaTextContainer}>
          <RegularText style={[styles.overlayMetaText]}>
            <MediumText>akshay_kumar</MediumText> and 56{" "}
            <MediumText>others</MediumText>
          </RegularText>
        </SafeAreaView>
        <SafeAreaView edges={[]} style={[styles.overlayMetaTextContainer]}>
          <RegularText style={[styles.overlayMetaText]}>29</RegularText>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    top: 0,
    left: 0,
    zIndex: 10,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayMetaText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  overlayMetaTextContainer: {
    marginVertical: 6,
  },
});

export default ImageFeedPostOverlay;
