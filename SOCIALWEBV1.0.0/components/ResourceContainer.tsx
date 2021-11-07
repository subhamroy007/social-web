import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ResourceContainnerProps } from "../utility/types/other_types";

const ResourceContainer = ({
  iconName,
  title,
  url,
}: ResourceContainnerProps) => {
  return (
    <Pressable style={styles.touchable} onPress={useCallback(() => {}, [])}>
      <View style={styles.container}>
        <MaterialIcons
          style={styles.icon}
          name="email"
          size={20}
          color="black"
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ResourceContainer;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "#EBE8FB",
    borderRadius: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  icon: {
    marginHorizontal: 4,
  },
  text: {
    marginHorizontal: 4,
    fontWeight: "bold",
  },
});
