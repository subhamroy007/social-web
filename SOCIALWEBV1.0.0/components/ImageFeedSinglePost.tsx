import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  PanResponder,
  PanResponderInstance,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageFeedPostOverlay from "./ImageFeedPostOverlay";

export interface ImageFeedSinglePostProps {
  url: string;
  width: number;
  height: number;
}

const ImageFeedSinglePost = (props: ImageFeedSinglePostProps) => {
  const [isPressed, setPressed] = useState(false);

  const { width: scaledWidth } = useWindowDimensions();

  const scaledHeight = Math.floor((props.height * scaledWidth) / props.width);

  // const imageSource: Source = useMemo(
  //   () => ({
  //     uri: props.url,
  //     cache: "immutable",
  //     priority: "high",
  //   }),
  //   [props.url]
  // );

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.imageFeedSinglePostContainer]}
    >
      {isPressed && (
        <ImageFeedPostOverlay width={scaledWidth} height={scaledHeight} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedSinglePostContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});

export default ImageFeedSinglePost;

//  const imagePostPanResponder = useRef<PanResponderInstance>(
//    PanResponder.create({
//      // Ask to be the responder:
//      onStartShouldSetPanResponder: (evt, gestureState) => {
//        console.log("image responder set");
//        return true;
//      },
//      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
//        console.log("image responder set with parent");
//        return false;
//      },
//      onMoveShouldSetPanResponder: (evt, gestureState) => false,
//      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

//      onPanResponderGrant: (evt, gestureState) => {
//        // The gesture has started. Show visual feedback so the user knows
//        // what is happening!
//        // gestureState.d{x,y} will be set to zero now
//      },
//      onPanResponderMove: (evt, gestureState) => {
//        // The most recent move distance is gestureState.move{X,Y}
//        // The accumulated gesture distance since becoming responder is
//        // gestureState.d{x,y}
//        setMoving(true);
//        console.log("moving");
//      },
//      onPanResponderTerminationRequest: (evt, gestureState) => isMoving,
//      onPanResponderRelease: (evt, gestureState) => {
//        // The user has released all touches while this view is the
//        // responder. This typically means a gesture has succeeded
//        if (gestureState.dx === 0 && gestureState.dy === 0) {
//          setPressed((state) => !state);
//        }
//      },
//      onPanResponderTerminate: (evt, gestureState) => {
//        // Another component has become the responder, so this gesture
//        // should be cancelled
//        console.log("responder cancelled");
//      },
//      onShouldBlockNativeResponder: (evt, gestureState) => {
//        // Returns whether this component should block native components from becoming the JS
//        // responder. Returns true by default. Is currently only supported on android.
//        return true;
//      },
//    })
//  ).current;
