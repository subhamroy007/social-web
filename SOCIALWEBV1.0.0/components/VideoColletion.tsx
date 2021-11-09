import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalLayouts } from "../utility/style/layout";
import { BoldText } from "../utility/ui/appText";

const VideoCollection = () => {
  return (
    <SafeAreaView edges={["left", "right"]} style={[globalLayouts.tabLayout]}>
      <BoldText>video collection</BoldText>
    </SafeAreaView>
  );
};

export default VideoCollection;
