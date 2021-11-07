import React, { useMemo } from "react";
import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WINDOW_WIDTH } from "../utility/constants/appConstants";
import AnimatedSafeAreaView from "../utility/ui/animatedSafeAreaView";

export interface CarosolProps {
  noOfItems: number;
  normalDotSize: number;
  activeDotSize: number;
  scrollReference: Animated.Value;
}

const Carosol = (props: CarosolProps) => {
  const dummyList = useMemo(() => {
    const list = [];
    for (let i = 0; i < props.noOfItems; i++) {
      list.push(i);
    }
    return list;
  }, [props.noOfItems]);

  const carosolDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width: props.noOfItems * props.normalDotSize * 3,
    }),
    [props.noOfItems, props.normalDotSize]
  );
  return (
    <SafeAreaView edges={[]} style={[styles.carosol, carosolDynamicStyle]}>
      {dummyList.map((item, index) => {
        const size = props.scrollReference.interpolate({
          inputRange: [
            WINDOW_WIDTH * (index - 1),
            WINDOW_WIDTH * index,
            WINDOW_WIDTH * (index + 1),
          ],
          outputRange: [
            props.normalDotSize,
            props.activeDotSize,
            props.normalDotSize,
          ],
          extrapolate: "clamp",
        });

        return (
          <AnimatedSafeAreaView
            edges={[]}
            style={[
              {
                width: size,
                height: size,
                borderRadius: Animated.divide(size, 2),
                backgroundColor: "black",
              },
            ]}
            key={index}
          ></AnimatedSafeAreaView>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carosol: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Carosol;
