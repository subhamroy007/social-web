import React, { ReactElement, useCallback, useMemo, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { TAB_ICON_SIZE_RATIO } from "../utility/constants/appConstants";
import AnimatedSafeAreaView from "../utility/ui/animatedSafeAreaView";
import Icon from "./Icon";

export interface CustomMaterialScreenProps {
  target: JSX.Element;
  icon: string;
  activeColor: string;
  inActiveColor: string;
}

export interface CustomMaterialNavigatorProps {
  width: number;
  height: number;
  children: ReactElement<CustomMaterialScreenProps>[];
}

export interface TabItemProps {
  width: number;
  icon: string;
  activeColor: string;
  inActiveColor: string;
  size: number;
  onPress: () => void;
}

export const TabItem = ({
  activeColor,
  icon,
  inActiveColor,
  onPress,
  width,
  size,
}: TabItemProps) => {
  const itemDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width }),
    [width]
  );

  return (
    <Pressable onPress={onPress} android_disableSound={true}>
      <SafeAreaView edges={[]} style={[itemDynamicStyle, styles.tabItem]}>
        <Icon color={activeColor} name={icon} size={size} />
      </SafeAreaView>
    </Pressable>
  );
};

export const CustomMaterialScreen = ({ target }: CustomMaterialScreenProps) => {
  const Component = target;

  return Component;
};

const CustomMaterialNavigator = ({
  width,
  height,
  children,
}: CustomMaterialNavigatorProps) => {
  const containerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width, height }),
    [width, height]
  );
  const animatedData = useRef<Animated.Value>(new Animated.Value(0)).current;
  const scrollbarRef = useRef<ScrollView>(null);

  const swipeHandler = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      animatedData.setValue(nativeEvent.contentOffset.x);
    },
    []
  );

  const tabIndicatorContainerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  const tabIndicatorDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width: width / children.length, borderBottomWidth: 2 }),
    [width]
  );

  const tabItemContainerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width }),
    [width]
  );

  const tabIconList = useMemo(
    () =>
      children.map((item, index) => (
        <TabItem
          activeColor={item.props.activeColor}
          icon={item.props.icon}
          inActiveColor={item.props.inActiveColor}
          key={"item" + index}
          size={width * TAB_ICON_SIZE_RATIO}
          width={width / children.length}
          onPress={() => {
            scrollbarRef.current?.scrollTo({
              x: index * width,
              y: 0,
              animated: true,
            });
          }}
        />
      )),
    [children]
  );

  return (
    <SafeAreaView edges={["left", "right"]}>
      <SafeAreaView
        edges={["left", "right"]}
        style={[styles.tabItemContainer, tabItemContainerDynamicStyle]}
      >
        {tabIconList}
      </SafeAreaView>
      <SafeAreaView
        edges={["left", "right"]}
        style={[tabIndicatorContainerDynamicStyle]}
      >
        <AnimatedSafeAreaView
          edges={[]}
          style={[
            styles.tabIndicator,
            tabIndicatorDynamicStyle,
            {
              left: animatedData.interpolate({
                inputRange: [0, width * (children.length - 1)],
                outputRange: [0, width - width / children.length],
                extrapolate: "clamp",
              }),
            },
          ]}
        ></AnimatedSafeAreaView>
      </SafeAreaView>
      <SafeAreaView edges={[]} style={[containerDynamicStyle]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={1}
          pagingEnabled={true}
          onScroll={swipeHandler}
          ref={scrollbarRef}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    borderBottomColor: "black",
  },
  tabItemContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  tabItem: {
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomMaterialNavigator;
