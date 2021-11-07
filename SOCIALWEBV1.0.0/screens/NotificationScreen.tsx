import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import Avatar from "../components/Avatar";
import ShutterBodyListItem from "../components/ShutterBodyListItem";

const NotificationScreen = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
    >
      <Text>Notification Screen</Text>
      <Avatar size={32} url="https://www.gstatic.com/webp/gallery/4.sm.webp" />
    </SafeAreaView>
  );
};

export default NotificationScreen;
