import React, { ReactNode } from "react";
import { StyleSheet, TextProps } from "react-native";

export interface IconProps {
  children: (iconDefaultProps: TextProps) => ReactNode;
  onPress: () => void;
}

const Icon = (props: IconProps) => {
  const iconDefaultProps: TextProps = {
    adjustsFontSizeToFit: true,
    allowFontScaling: true,
    maxFontSizeMultiplier: 2.0,
    minimumFontScale: 0.5,
    onPress: props.onPress,
  };

  return <>{props.children(iconDefaultProps)}</>;
};

const styles = StyleSheet.create({
  iconDefaultProps: {},
});

export default Icon;
