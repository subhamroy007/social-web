import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ResourceContainnerProps } from "../utility/types/other_types";
import { MediumText } from "../utility/ui/appText";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "./Icon";

const HighlightedLink = ({
  iconName,
  title,
  url,
  style,
}: ResourceContainnerProps) => {
  const pressHandler = useCallback(() => {}, []);

  return (
    <Pressable onPress={pressHandler}>
      <SafeAreaView style={[styles.container, style]} edges={[]}>
        <Icon name={iconName} color="black" size={16} />
        <MediumText style={styles.titleText}>{title}</MediumText>
      </SafeAreaView>
    </Pressable>
  );
};

export default HighlightedLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "nowrap",
    backgroundColor: "#EBE8FB",
    borderRadius: 12,
    padding: 4,
  },
  titleText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
