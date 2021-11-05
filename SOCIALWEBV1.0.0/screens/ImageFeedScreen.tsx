import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import { Text } from "react-native";

const ImageFeedScreen = () => {
    const searchHandler = (text: string) => {
        console.log(text);
    };
    return (
        <SafeAreaView
            style={[globalLayouts.screenLayout, globalColors.screenColor]}
        >
            <Text>Image Feed Screen</Text>
        </SafeAreaView>
    );
};

export default ImageFeedScreen;
