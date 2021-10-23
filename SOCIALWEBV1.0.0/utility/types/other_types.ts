import { Animated, PanResponderInstance } from "react-native";

export interface GenericTabBarIconProps {
  children: React.ReactNode;
  onPress: (routeName: string) => void;
  routeName: string;
}

export interface NavigationShutterHook {
  animationControlData: Animated.Value;
  isOverlayVisible: boolean;
  shutterPanResponder: PanResponderInstance;
}
