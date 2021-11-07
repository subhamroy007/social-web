import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useMemo } from "react";
import {
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useNavigationShutterHook from "../hooks/useNavigationShutterHook";
import {
  SHUTTER_ABSOLUTE_TOP_POSITION,
  SHUTTER_HEIGHT,
  SHUTTER_TRANSLATION_Y_MAX,
  SHUTTER_TRANSLATION_Y_MIN,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../utility/constants/appConstants";
import { globalColors } from "../utility/style/colors";
import MainTabNavigationBar from "./MainTabNavigationBar";

const ShutterComponent = (props: BottomTabBarProps) => {
  const { animationControlData, isOverlayVisible, shutterPanResponder } =
    useNavigationShutterHook();

  const ShutterAnimatedSafeView = useMemo(
    () => Animated.createAnimatedComponent(SafeAreaView),
    []
  );

  const shutterDynamicStyle = useMemo(() => {
    return {
      height: SHUTTER_HEIGHT,
      top: SHUTTER_ABSOLUTE_TOP_POSITION,
      transform: [{ translateY: animationControlData }],
      borderTopStartRadius: animationControlData.interpolate({
        inputRange: [SHUTTER_TRANSLATION_Y_MIN, SHUTTER_TRANSLATION_Y_MAX],
        outputRange: [16, 0],
        easing: Easing.linear,
      }),
      borderTopEndRadius: animationControlData.interpolate({
        inputRange: [SHUTTER_TRANSLATION_Y_MIN, SHUTTER_TRANSLATION_Y_MAX],
        outputRange: [16, 0],
        easing: Easing.linear,
      }),
    };
  }, [animationControlData]);

  return (
    <>
      {/* conditionally render the overlay with transparent background when shutter is being pressed */}
      {isOverlayVisible && (
        <ShutterAnimatedSafeView
          style={[
            globalColors.shutterOverlayColor,
            styles.shutterOverlay,
            {
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT,
            },
            {
              opacity: animationControlData.interpolate({
                inputRange: [
                  SHUTTER_TRANSLATION_Y_MIN,
                  SHUTTER_TRANSLATION_Y_MAX,
                ],
                outputRange: [0.64, 0],
              }),
            },
          ]}
        ></ShutterAnimatedSafeView>
      )}
      {/* the root view rendering the entire shutter component with animated transitionY, borderTopRadius and custom 
            pan responder system*/}
      <ShutterAnimatedSafeView
        style={[globalColors.shutterColor, styles.shutter, shutterDynamicStyle]}
        edges={["left", "right", "bottom"]}
        {...shutterPanResponder.panHandlers}
      >
        {/* an animated safe area which works as an overlay when the shutter is active and
        the opacity of the overlay changes as the shutter moves */}
        {/* this is the header section of the shutter contains the main navigation */}
        <ShutterAnimatedSafeView
          style={[
            styles.shutterHeader,
            globalColors.shutterHeaderColor,
            {
              borderTopStartRadius: animationControlData.interpolate({
                inputRange: [
                  SHUTTER_TRANSLATION_Y_MIN,
                  SHUTTER_TRANSLATION_Y_MAX,
                ],
                outputRange: [16, 0],
                easing: Easing.linear,
              }),
              borderTopEndRadius: animationControlData.interpolate({
                inputRange: [
                  SHUTTER_TRANSLATION_Y_MIN,
                  SHUTTER_TRANSLATION_Y_MAX,
                ],
                outputRange: [16, 0],
                easing: Easing.linear,
              }),
            },
          ]}
          edges={["left", "right"]}
        >
          <MainTabNavigationBar {...props} />
        </ShutterAnimatedSafeView>
        {/* this is the body of the shutter contains the secondary navigation icons */}
        <SafeAreaView
          style={[styles.shutterBody, globalColors.shutterBodyColor]}
          edges={["left", "right"]}
        ></SafeAreaView>
        {/* this is the footer section of the shutter contains the additional control icons of a specific screen */}
        <SafeAreaView
          style={[styles.shutterFooter, globalColors.shutterFooterColor]}
          edges={["bottom", "left", "right"]}
        ></SafeAreaView>
      </ShutterAnimatedSafeView>
    </>
  );
};

const styles = StyleSheet.create({
  shutter: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    zIndex: 4,
  },
  shutterFooter: {
    flex: 3,
    width: "100%",
    borderTopWidth: 1,
  },
  shutterHeader: {
    flex: 4,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 1,
  },
  shutterBody: {
    flex: 18,
    width: "100%",
    borderTopWidth: 1,
  },
  shutterOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
  },
});

export default ShutterComponent;
