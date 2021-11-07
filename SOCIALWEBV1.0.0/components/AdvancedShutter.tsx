import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
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
import AnimatedSafeAreaView from "../utility/ui/animatedSafeAreaView";
import MainTabNavigationBar from "./MainTabNavigationBar";
import ShutterBody from "./ShutterBody";

const AdvancedShutter = (props: BottomTabBarProps) => {
  const animationControlData = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

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

  const shutterPositionOffset = useRef<number>(0);

  const dragEventData = useRef<{ transitionY: number; velocityY: number }>({
    transitionY: 0,
    velocityY: 0,
  });

  const [isOverlayVisible, setVisible] = useState<boolean>(false);

  const shutterDragActiveHandler = useCallback(() => {
    animationControlData.setOffset(shutterPositionOffset.current);
    setVisible(true);
    dragEventData.current = { transitionY: 0, velocityY: 0 };
  }, [animationControlData, shutterPositionOffset, setVisible]);

  const shutterDragHandler = useCallback(
    ({ nativeEvent }: GestureEvent<PanGestureHandlerEventPayload>) => {
      const result = Math.max(
        Math.min(
          SHUTTER_TRANSLATION_Y_MAX - shutterPositionOffset.current,
          nativeEvent.translationY
        ),
        SHUTTER_TRANSLATION_Y_MIN - shutterPositionOffset.current
      );

      dragEventData.current.transitionY = nativeEvent.translationY;
      dragEventData.current.velocityY = nativeEvent.velocityY;
      animationControlData.setValue(result);
    },
    []
  );

  const shutterReleaseHandler = useCallback(
    ({ nativeEvent }: HandlerStateChangeEvent<Record<string, unknown>>) => {
      animationControlData.flattenOffset();

      if (
        dragEventData.current.transitionY < 0 &&
        shutterPositionOffset.current === SHUTTER_TRANSLATION_Y_MIN
      ) {
        return;
      }
      if (
        dragEventData.current.transitionY > 0 &&
        shutterPositionOffset.current === SHUTTER_TRANSLATION_Y_MAX
      ) {
        setVisible(false);
        return;
      }

      if (dragEventData.current.transitionY < 0) {
        if (
          (dragEventData.current.velocityY < -0.5 ||
            Math.abs(dragEventData.current.transitionY) >
              Math.round(SHUTTER_HEIGHT * 0.5)) &&
          shutterPositionOffset.current === SHUTTER_TRANSLATION_Y_MAX
        ) {
          Animated.timing(animationControlData, {
            toValue: SHUTTER_TRANSLATION_Y_MIN,
            useNativeDriver: false,
            duration: 150,
            easing: Easing.linear,
          }).start(({ finished }) => {
            if (finished) {
              shutterPositionOffset.current = SHUTTER_TRANSLATION_Y_MIN;
            }
          });
        } else if (
          Math.abs(dragEventData.current.transitionY) <=
          Math.round(SHUTTER_HEIGHT * 0.5)
        ) {
          Animated.timing(animationControlData, {
            toValue: SHUTTER_TRANSLATION_Y_MAX,
            useNativeDriver: false,
            duration: 150,
            easing: Easing.linear,
          }).start(({ finished }) => {
            if (finished) {
              shutterPositionOffset.current = SHUTTER_TRANSLATION_Y_MAX;
              setVisible(false);
            }
          });
        }
      } else if (
        dragEventData.current.transitionY > 0 &&
        shutterPositionOffset.current === SHUTTER_TRANSLATION_Y_MIN
      ) {
        Animated.timing(animationControlData, {
          toValue: SHUTTER_TRANSLATION_Y_MAX,
          useNativeDriver: false,
          duration: 150,
          easing: Easing.linear,
        }).start(({ finished }) => {
          if (finished) {
            shutterPositionOffset.current = SHUTTER_TRANSLATION_Y_MAX;
            setVisible(false);
          }
        });
      }
    },
    [animationControlData, setVisible, shutterPositionOffset, dragEventData]
  );

  return (
    <>
      {/* conditionally render the overlay with transparent background when shutter is being pressed */}
      {isOverlayVisible && (
        <AnimatedSafeAreaView
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
        ></AnimatedSafeAreaView>
      )}
      {/* the root view rendering the entire shutter component with animated transitionY, borderTopRadius and custom 
            pan responder system*/}
      <PanGestureHandler
        onActivated={shutterDragActiveHandler}
        onCancelled={shutterReleaseHandler}
        onFailed={shutterReleaseHandler}
        onEnded={shutterReleaseHandler}
        onGestureEvent={shutterDragHandler}
        minPointers={1}
        maxPointers={1}
        avgTouches={true}
        enableTrackpadTwoFingerGesture={true}
      >
        <AnimatedSafeAreaView
          style={[
            globalColors.shutterColor,
            styles.shutter,
            shutterDynamicStyle,
          ]}
          edges={["left", "right", "bottom"]}
        >
          {/* an animated safe area which works as an overlay when the shutter is active and
        the opacity of the overlay changes as the shutter moves */}
          {/* this is the header section of the shutter contains the main navigation */}
          <AnimatedSafeAreaView
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
          </AnimatedSafeAreaView>
          {/* this is the body of the shutter contains the secondary navigation icons */}
          <ShutterBody />
          {/* this is the footer section of the shutter contains the additional control icons of a specific screen */}
          <SafeAreaView
            style={[styles.shutterFooter, globalColors.shutterFooterColor]}
            edges={["bottom", "left", "right"]}
          ></SafeAreaView>
        </AnimatedSafeAreaView>
      </PanGestureHandler>
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
  shutterOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
  },
});

export default AdvancedShutter;
