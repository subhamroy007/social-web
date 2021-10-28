import { ScrollView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextScrollProps } from "../utility/types/other_types";
const TextScroll = ({ children }: TextScrollProps) => {
    // This is a wrapper component the wraps
    return (
        <SafeAreaView style={styles.scroller}>
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    );
};

export default TextScroll;

const styles = StyleSheet.create({
    scroller: {
        maxHeight: 200,
        marginHorizontal: 6,
    },
});
