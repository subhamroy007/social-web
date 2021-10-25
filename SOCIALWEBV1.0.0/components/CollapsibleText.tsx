import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const CollapsibleText = ({ content }: { content: string }) => {
    const length = content.length;
    const thresholdLength = 75;
    const text = content;
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const resultText: string = isCollapsed
        ? text.slice(0, thresholdLength)
        : text;
    const collapseStateHandler = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    };
    const collapseToggler = isCollapsed ? (
        <Text onPress={collapseStateHandler} style={styles.collapseToggler}>
            {" "}
            Read more
        </Text>
    ) : (
        <Text onPress={collapseStateHandler} style={styles.collapseToggler}>
            {" "}
            Read less
        </Text>
    );
    return (
        <Text style={styles.collapse}>
            {resultText}
            {length < thresholdLength ? null : collapseToggler}
        </Text>
    );
};

export default CollapsibleText;

const styles = StyleSheet.create({
    collapse: {
        width: "100%",
    },
    collapseToggler: {
        color: "gray",
    },
});
