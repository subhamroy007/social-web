import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import { Text } from "react-native";

const ImageFeedScreen = () => {
    const text: string =
        "Lorem  ipsum \n dolor sit, amet consectetur adipisicing elit. Sed quidem \n voluptatum quo, at impedit, repudiandae enim fuga, sunt praesentium dignissimos ratione nemo consequatur! Cum repudiandae voluptate officiis quam atque voluptatem!";
    return (
        <SafeAreaView
            style={[globalLayouts.screenLayout, globalColors.screenColor]}
        >
            <Text>Image Feed Screen</Text>
        </SafeAreaView>
    );
};

export default ImageFeedScreen;
