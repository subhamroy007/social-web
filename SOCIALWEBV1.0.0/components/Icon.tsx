import React, { ReactNode } from "react";
import {
  Pressable,
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
} from "react-native";

export interface IconProps {
  children: ReactNode;
  onPress: () => void;
}

const Icon = (props: IconProps) => {
  return (
    <Pressable onPress={props.onPress} android_disableSound={true}>
      {props.children}
    </Pressable>
  );
};

export default Icon;
