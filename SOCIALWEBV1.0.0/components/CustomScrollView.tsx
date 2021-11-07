import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomScrollView = () => {
  return (
    <SafeAreaView edges={[]}>
      <SafeAreaView edges={[]}></SafeAreaView>
    </SafeAreaView>
  );
};

export default CustomScrollView;
