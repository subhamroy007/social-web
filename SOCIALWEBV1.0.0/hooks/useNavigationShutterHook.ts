import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  PanResponder,
  PanResponderInstance,
  useWindowDimensions,
} from "react-native";
import { NavigationShutterHook } from "../utility/types/other_types";

const useNavigationShutterHook = (): NavigationShutterHook => {
  const animationControlData = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  const shutterPositionOffset = useRef<number>(0);

  const [isOverlayVisible, setVisible] = useState<boolean>(false);

  const { fontScale, height, scale, width } = useWindowDimensions();

  const shutterHeight = Math.round(height * 0.47);
  const shutterAbsolutePositionTop =
    height - Math.round((height * 0.47 * 4) / 25);
  const shutterTranslationMin =
    Math.round((height * 0.47 * 4) / 25) - shutterHeight;
  const shutterTranslationMax = 0;

  const shutterPanResponder = useRef<PanResponderInstance>(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => false,
      onStartShouldSetPanResponderCapture: (e, gestureState) => false,
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (e, gestureState) => false,
      onPanResponderGrant: (e, gestureState) => {
        animationControlData.setOffset(shutterPositionOffset.current);
        setVisible(true);
      },
      onPanResponderMove: (e, gestureState) => {
        const result = Math.max(
          Math.min(
            shutterTranslationMax - shutterPositionOffset.current,
            gestureState.dy
          ),
          shutterTranslationMin - shutterPositionOffset.current
        );
        animationControlData.setValue(result);
      },
      onPanResponderTerminationRequest: (e, gestureState) => true,

      onPanResponderRelease: (e, gestureState) => {
        animationControlData.flattenOffset();

        if (
          gestureState.dy < 0 &&
          shutterPositionOffset.current === shutterTranslationMin
        ) {
          return;
        }
        if (
          gestureState.dy > 0 &&
          shutterPositionOffset.current === shutterTranslationMax
        ) {
          setVisible(false);
          return;
        }

        if (gestureState.dy < 0) {
          if (
            (gestureState.vy < -0.5 ||
              Math.abs(gestureState.dy) > Math.round(shutterHeight * 0.5)) &&
            shutterPositionOffset.current === shutterTranslationMax
          ) {
            Animated.timing(animationControlData, {
              toValue: shutterTranslationMin,
              useNativeDriver: false,
              duration: 150,
              easing: Easing.linear,
            }).start(({ finished }) => {
              if (finished) {
                shutterPositionOffset.current = shutterTranslationMin;
              }
            });
          } else if (
            Math.abs(gestureState.dy) <= Math.round(shutterHeight * 0.5)
          ) {
            Animated.timing(animationControlData, {
              toValue: shutterTranslationMax,
              useNativeDriver: false,
              duration: 150,
              easing: Easing.linear,
            }).start(({ finished }) => {
              if (finished) {
                shutterPositionOffset.current = shutterTranslationMax;
                setVisible(false);
              }
            });
          }
        } else if (
          gestureState.dy > 0 &&
          shutterPositionOffset.current === shutterTranslationMin
        ) {
          Animated.timing(animationControlData, {
            toValue: shutterTranslationMax,
            useNativeDriver: false,
            duration: 150,
            easing: Easing.linear,
          }).start(({ finished }) => {
            if (finished) {
              shutterPositionOffset.current = shutterTranslationMax;
              setVisible(false);
            }
          });
        }
      },
      onPanResponderTerminate: (e, gestureState) => {},
      onShouldBlockNativeResponder: (e, gestureState) => true,
    })
  ).current;

  return {
    animationControlData,
    isOverlayVisible,
    shutterPanResponder,
  };
};

export default useNavigationShutterHook;
