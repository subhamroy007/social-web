import React, { useCallback, useMemo, useState } from "react";
import { Dimensions, StyleProp, StyleSheet } from "react-native";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";
import {
  GestureHandlerRootView,
  HandlerStateChangeEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IMAGE_POST_MAX_HEIGHT,
  IMAGE_POST_MIN_HEIGHT,
} from "../utility/constants/appConstants";
import ImageFeedPostOverlay from "./ImageFeedPostOverlay";

export interface ImageFeedSinglePostProps {
  url: string;
  width: number;
  height: number;
}

export interface ImagePostResolutionHookArg {
  imageResizeMode: ResizeMode;
  imageResolution: StyleProp<ImageStyle>;
  scaledWidth: number;
  scaledHeight: number;
}

const ImageFeedSinglePost = ({
  url,
  height,
  width,
}: ImageFeedSinglePostProps) => {
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);

  const imageSource: Source = useMemo(
    () => ({ cache: "immutable", priority: "high", uri: url }),
    [url]
  );

  const { imageResizeMode, imageResolution, scaledHeight, scaledWidth } =
    useMemo<ImagePostResolutionHookArg>(() => {
      let imageScaledWidth = Dimensions.get("window").width;
      let imageScaledHeight = (height * imageScaledWidth) / width;
      let imageResizeMode: ResizeMode = "center";

      if (width < imageScaledWidth && height < imageScaledHeight) {
        imageResizeMode = "center";
      } else {
        imageResizeMode = "cover";
      }

      if (imageScaledHeight < IMAGE_POST_MIN_HEIGHT) {
        imageScaledHeight = IMAGE_POST_MIN_HEIGHT;
      } else if (imageScaledHeight > IMAGE_POST_MAX_HEIGHT) {
        imageScaledHeight = IMAGE_POST_MAX_HEIGHT;
      }

      const imageResolution: StyleProp<ImageStyle> = {
        width: imageScaledWidth,
        height: imageScaledHeight,
      };
      return {
        imageResizeMode,
        imageResolution,
        scaledWidth: imageScaledWidth,
        scaledHeight: imageScaledHeight,
      };
    }, [width, height]);

  const singleTapHandler = useCallback(
    ({
      nativeEvent,
    }: HandlerStateChangeEvent<TapGestureHandlerEventPayload>) => {
      if (nativeEvent.state === State.ACTIVE) {
        setOverlayVisible((state) => !state);
      }
    },
    []
  );

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[styles.imageFeedSinglePostContainer]}
    >
      <GestureHandlerRootView>
        <TapGestureHandler
          minPointers={1}
          maxDurationMs={600}
          maxDelayMs={600}
          numberOfTaps={1}
          maxDeltaX={width}
          maxDeltaY={height}
          shouldCancelWhenOutside={true}
          onHandlerStateChange={singleTapHandler}
        >
          <SafeAreaView edges={[]}>
            <FastImage
              source={imageSource}
              resizeMode={imageResizeMode}
              style={[imageResolution, styles.imageStyle]}
            />
            {isOverlayVisible && (
              <ImageFeedPostOverlay height={scaledHeight} width={scaledWidth} />
            )}
          </SafeAreaView>
        </TapGestureHandler>
      </GestureHandlerRootView>
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
    backgroundColor: "red",
  },
});

export default ImageFeedSinglePost;
