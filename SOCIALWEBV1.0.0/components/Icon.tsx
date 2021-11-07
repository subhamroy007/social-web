import React, { ReactNode, useMemo } from "react";
import { StyleProp, StyleSheet, TextProps, TextStyle } from "react-native";
import { CustomIcon } from "../utility/ui/appIcon";

//utility interface to represent icon props
export interface IconProps {
  //optional action associated to the icon
  onPress?: () => void;
  //name of the icon
  name: string;
  //size of the icon in pixels
  size: number;
  //color of the icon
  color: string;
}

const Icon = ({ color, name, onPress, size }: IconProps) => {
  //combine the default properties and passed on properties for the target icon
  const iconDefaultProps: TextProps = useMemo(
    () => ({
      adjustsFontSizeToFit: true,
      allowFontScaling: true,
      maxFontSizeMultiplier: 2.0,
      minimumFontScale: 0.5,
      onPress: onPress,
    }),
    [onPress]
  );

  return (
    <CustomIcon name={name} size={size} color={color} {...iconDefaultProps} />
  );
};

export default Icon;
