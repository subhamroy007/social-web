import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUNDED_ICON_SIZE_TO_GAP_RATIO } from "../utility/constants/appConstants";
import Icon, { IconProps } from "./Icon";

//a utility interface extends the IconProps and specifies tap and drap gesture configuration
export interface RoundedIconProps extends IconProps {
  //whether the icon supports tapping
  tapEnabled: boolean;
  //whether the icon supports dragging
  dragEnabled: boolean;
  //tap handler
  onTap?: () => void;
  //drag handler
  onDrag?: () => void;
  //optional style prop
  style?: StyleProp<ViewStyle>;
}

//a utility component that works like a rounded icon with a speicific background
const RoundedIcon = (props: RoundedIconProps) => {
  const { dragEnabled, tapEnabled, onDrag, onTap, ...restProps } = props;

  const iconBackgroundDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      padding: ROUNDED_ICON_SIZE_TO_GAP_RATIO * props.size,
      borderRadius: props.size * (1 + 2 * ROUNDED_ICON_SIZE_TO_GAP_RATIO),
    }),
    []
  );

  return (
    <TapGestureHandler
      enabled={tapEnabled}
      numberOfTaps={1}
      onActivated={onTap}
    >
      <PanGestureHandler
        enabled={dragEnabled}
        minPointers={1}
        maxPointers={1}
        avgTouches={true}
        enableTrackpadTwoFingerGesture={true}
        onGestureEvent={onDrag}
      >
        <SafeAreaView
          edges={[]}
          style={[
            props.style,
            styles.iconBackground,
            iconBackgroundDynamicStyle,
          ]}
        >
          <Icon {...restProps} />
        </SafeAreaView>
      </PanGestureHandler>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: "#EBE8FB",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default RoundedIcon;
