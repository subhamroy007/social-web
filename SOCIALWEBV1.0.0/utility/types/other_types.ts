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

export interface CollapseTextProps {
    content: string;
}

export interface TextScrollProps {
    children: React.ReactNode;
}

export interface ResourceContainnerProps {
    iconName: string;
    title: string;
    url: string;
}