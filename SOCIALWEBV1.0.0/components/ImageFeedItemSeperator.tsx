import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageFeedItemSeperatorComponent = () => {
  return (
    <SafeAreaView
      style={styles.itemSeperatorContainer}
      edges={[]}
    ></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemSeperatorContainer: {
    width: "100%",
    height: 6,
  },
});

export default ImageFeedItemSeperatorComponent;
