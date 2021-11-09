import {
  Animated,
  PanResponderInstance,
  StyleProp,
  ViewStyle,
} from "react-native";

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
  style?: StyleProp<ViewStyle>;
}

//a utility interface represent the name value component props
export interface NameValuePairProps {
  name: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}
