import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import React, { useCallback } from "react";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import GenericTabBarIcon from "./GenericTabBarIcon";

const MainTabNavigationBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  //generic navigation icon press handler that navigates to a specific screen depending on the
  //icon pressed and currently active screen
  const tabIconPressHandler = useCallback((routeName: string) => {
    //manually emitting the 'tabPress' navigation event that can be handled by the target screen
    const tabPressEvent = navigation.emit({
      type: "tabPress",
      target: routeName,
      canPreventDefault: true,
    });

    //if the current screen is not the target screen and the default behavior of the 'tabPress' event is not
    //prevented then navigate to the target screen
    if (
      routeName !== state.routeNames[state.index] &&
      !tabPressEvent.defaultPrevented
    ) {
      navigation.navigate(routeName);
    }
  }, []);

  //iterate through all the route names and render the appropriate navigation icons for each routeName
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
