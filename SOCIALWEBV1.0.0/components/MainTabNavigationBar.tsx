import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { globalColors } from "../utility/style/colors";
import GenericTabBarIcon from "./GenericTabBarIcon";

const MainTabNavigationBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const tabIconPressHandler = useCallback((routeName: string) => {
    const tabPressEvent = navigation.emit({
      type: "tabPress",
      target: routeName,
      canPreventDefault: true,
    });

    if (
      routeName !== state.routeNames[state.index] &&
      !tabPressEvent.defaultPrevented
    ) {
      navigation.navigate(routeName);
    }
  }, []);

  return (
    <>
      {state.routes.map((item, index) => {
        switch (item.name) {
          case "ImageFeed":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="ImageFeed"
              >
                <Feather name="camera" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "SearchResult":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="SearchResult"
              >
                <Feather name="search" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Profile":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Profile"
              >
                <AntDesign name="profile" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Trending":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Trending"
              >
                <FontAwesome5 name="hotjar" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Notification":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Notification"
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </GenericTabBarIcon>
            );
        }
      })}
    </>
  );
};

export default MainTabNavigationBar;
