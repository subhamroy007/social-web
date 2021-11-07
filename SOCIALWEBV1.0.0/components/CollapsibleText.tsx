import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { MediumText, RegularText } from "../utility/ui/appText";

const CollapsibleText = ({ content }: { content: string }) => {
  const length = content.length;
  const thresholdLength = 15;
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
      {length < thresholdLength ? null : collapseToggler}
    </RegularText>
  );
};

export default CollapsibleText;

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
