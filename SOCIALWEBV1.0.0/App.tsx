import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { enableScreens } from "react-native-screens";
import MainTabNavigationBar from "./components/MainTabNavigationBar";
import ShutterComponent from "./components/ShutterComponent";
import ImageFeedScreen from "./screens/ImageFeedScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import TrendingScreen from "./screens/TrendingScreen";
import { MainTabNavigationParamList } from "./utility/types/navigation_types";

enableScreens(true);

const MainTabNavigation =
  createBottomTabNavigator<MainTabNavigationParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigation.Navigator
        tabBar={(props) => <ShutterComponent {...props} />}
      >
        <MainTabNavigation.Screen
          name="ImageFeed"
          component={ImageFeedScreen}
        />
        <MainTabNavigation.Screen
          name="SearchResult"
          component={SearchResultScreen}
        />
        <MainTabNavigation.Screen name="Profile" component={ProfileScreen} />
        <MainTabNavigation.Screen name="Trending" component={TrendingScreen} />
        <MainTabNavigation.Screen
          name="Notification"
          component={NotificationScreen}
        />
      </MainTabNavigation.Navigator>
    </NavigationContainer>
  );
};

export default App;
