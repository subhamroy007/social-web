import React, { useCallback } from "react";
import { GestureResponderEvent, TouchableWithoutFeedback } from "react-native";
import { GenericTabBarIconProps } from "../utility/types/other_types";

const GenericTabBarIcon = ({
  children,
  onPress,
  routeName,
}: GenericTabBarIconProps) => {
  const pressHandler = useCallback((event: GestureResponderEvent) => {
    onPress(routeName);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default GenericTabBarIcon;
