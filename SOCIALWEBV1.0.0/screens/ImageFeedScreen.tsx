import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import CollapsibleText from "../components/CollapsibleText";
import TextScroll from "../components/TextScroll";

const ImageFeedScreen = () => {
    const text: string =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quaerat nostrum nam distinctio cupiditate placeat eveniet quod dicta blanditiis doloribus, deleniti pariatur odit laborum voluptates quia repellat sapiente itaque. Quibusdam, incidunt? Expedita laudantium ratione minus saepe libero magnam excepturi nesciunt, earum voluptates provident corporis, quos mollitia aspernatur impedit dolorem asperiores placeat suscipit? Voluptates minus adipisci rem voluptas neque sed accusamus ea tempora harum nam. Veritatis, ullam. Repellat neque impedit iure possimus! Nam dolore, exercitationem pariatur praesentium reprehenderit doloremque excepturi consequuntur magnam natus! Vero, molestiae accusantium voluptatibus sed, quisquam quidem harum quos quas assumenda dolore quae. Illo ducimus magni nisi delectus.";
    return (
        <SafeAreaView
            style={[globalLayouts.screenLayout, globalColors.screenColor]}
        >
            <TextScroll>
                <CollapsibleText content={text} />
            </TextScroll>
        </SafeAreaView>
    );
};

export default ImageFeedScreen;
