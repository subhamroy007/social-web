import { ScrollView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const TextScroll = ({ children }: { children: ReactNode }) => {
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
        marginHorizontal: 10,
    },
});
