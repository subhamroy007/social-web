import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Icon from "../components/Icon";
import ImageGallery from "../components/ImageGallery";
import StoryBook from "../components/StoryBook";
import VideoCollection from "../components/VideoColletion";
import { ProfileContentNavigationParamList } from "../utility/types/navigation_types";

const CustomTab =
  createMaterialTopTabNavigator<ProfileContentNavigationParamList>();

const ProfileScreenNavigation = () => {
  return (
    <CustomTab.Navigator
      initialRouteName="ImageGallery"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarAllowFontScaling: true,
        tabBarIcon: (props) =>
          props.focused ? (
            <Icon color={props.color} name="heart-solid" size={24} />
          ) : (
            <Icon color={props.color} name="heart-outline" size={24} />
          ),
        tabBarShowIcon: true,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarIndicatorStyle: { backgroundColor: "black" },
        tabBarBounces: true,
        tabBarPressOpacity: 1,
        tabBarPressColor: "transparent",
      }}
    >
      <CustomTab.Screen name="ImageGallery" component={ImageGallery} />
      <CustomTab.Screen name="VideoCollection" component={VideoCollection} />
      <CustomTab.Screen name="StoryBook" component={StoryBook} />
    </CustomTab.Navigator>
  );
};

export default ProfileScreenNavigation;
