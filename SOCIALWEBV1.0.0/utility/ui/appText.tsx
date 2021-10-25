import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export const BoldText = (props: TextProps) => {
  const { style, ...restProps } = props;

  return (
    <Text {...restProps} style={[style, styles.boldText]}>
      {props.children}
    </Text>
  );
};

export const MediumText = (props: TextProps) => {
  const { style, ...restProps } = props;

  return (
    <Text {...restProps} style={[style, styles.mediumText]}>
      {props.children}
    </Text>
  );
};

export const LightText = (props: TextProps) => {
  const { style, ...restProps } = props;

  return (
    <Text {...restProps} style={[style, styles.lightText]}>
      {props.children}
    </Text>
  );
};

export const ThinText = (props: TextProps) => {
  const { style, ...restProps } = props;

  return (
    <Text {...restProps} style={[style, styles.thinText]}>
      {props.children}
    </Text>
  );
};

export const RegularText = (props: TextProps) => {
  const { style, ...restProps } = props;

  return (
    <Text {...restProps} style={[style, styles.regularText]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "roboto-bold",
  },
  mediumText: {
    fontFamily: "roboto-medium",
  },
  lightText: {
    fontFamily: "roboto-light",
  },
  thinText: {
    fontFamily: "roboto-thin",
  },
  regularText: {
    fontFamily: "roboto-regular",
  },
});
