import { StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { MediumText, RegularText } from "../utility/ui/appText";
import { THERESHOLDLENGTH } from "../utility/constants/appConstants";
import { CollapseTextProps } from "../utility/types/other_types";

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
  const collapseToggler = isCollapsed ? (
    <MediumText onPress={collapseStateHandler} style={styles.collapseToggler}>
      {" "}
      Read more
    </MediumText>
  ) : (
    <MediumText onPress={collapseStateHandler} style={styles.collapseToggler}>
      {" "}
      Read less
    </MediumText>
  );
  return (
    <RegularText style={styles.collapse}>
      {resultText}
      {length < THERESHOLDLENGTH ? null : collapseToggler}
    </RegularText>
  );
};

const styles = StyleSheet.create({
  collapse: {
    width: "100%",
    fontSize: 12,
    paddingHorizontal: 10,
  },
  collapseToggler: {
    color: "gray",
    fontSize: 14,
  },
});

export default CollapsibleText;
