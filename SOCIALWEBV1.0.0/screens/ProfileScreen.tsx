import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
    >
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
