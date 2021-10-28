import { StyleSheet, Text } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { CollapseTextProps } from "../utility/types/other_types";

import { THERESHOLDLENGTH } from "../utility/constants/AppConstants";

const CollapsibleText = ({ content }: CollapseTextProps) => {
    const length = content.length;
    const text = content;
    // isCollapsed is react state variable maintained to check whether the text component is expanded or not. The deafult value is true.
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    // newLinePosition state variable is used to store the the position of '\n' in the text string. The default value is 0.
    const [newLinePosition, setNewLinePosition] = useState<number>(0);

    // textSliceHandler function returns a substring from the original string based on the position of the first occurance of '\n', in comparison with THRESHOLD length.
    const textSliceHandler = useMemo((): string => {
        let slice: string = ""; // Variable to store the sliced substring, initialised with an empty string
        let position: number = text.indexOf("\n"); // Stores the position of the first occurance of '\n' in the original string
        setNewLinePosition(position);
        if (position > THERESHOLDLENGTH - 1) {
            slice = text.slice(0, THERESHOLDLENGTH + 1);
        } else {
            slice = text.slice(0, position);
        }
        return slice;
    }, []);

    const resultText: string = isCollapsed ? textSliceHandler : text; // Contains the resultant string based the isCollapsed state.

    // A callback function to control the value of the isCollapsed state.
    const collapseStateHandler = useCallback(() => {
        if (isCollapsed) {
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    }, [isCollapsed]);

    // Return React components conditionally to expand or collapse the text.
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
            {newLinePosition < THERESHOLDLENGTH
                ? collapseToggler
                : length < THERESHOLDLENGTH
                ? null
                : collapseToggler}
        </Text>
    );
};

export default CollapsibleText;

const styles = StyleSheet.create({
    collapse: {
        width: "100%",
        fontSize: 14,
    },
    collapseToggler: {
        color: "gray",
        fontSize: 16,
    },
});
