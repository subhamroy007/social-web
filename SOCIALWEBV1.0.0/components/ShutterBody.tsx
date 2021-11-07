import React, { useCallback, useMemo, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { WINDOW_WIDTH } from "../utility/constants/appConstants";
import { globalColors } from "../utility/style/colors";
import AnimatedSafeAreaView from "../utility/ui/animatedSafeAreaView";
import Carosol from "./Carosol";
import ShutterBodyListItem from "./ShutterBodyListItem";

const ShutterBody = () => {
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

  const shutterBodyListItems = useMemo(() => {
    const list = [];
    list.push(<ShutterBodyListItem key="item1" />);
    list.push(<ShutterBodyListItem key="item2" />);
    list.push(<ShutterBodyListItem key="item3" />);
    list.push(<ShutterBodyListItem key="item4" />);
    return list;
  }, []);

  const scrollCallback = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollX.setValue(event.nativeEvent.contentOffset.x);
    },
    []
  );

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[globalColors.shutterBodyColor, styles.shutterBody]}
    >
      <SafeAreaView style={[styles.shutterBodyContainer]} edges={[]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={1}
          onScroll={scrollCallback}
        >
          {shutterBodyListItems}
        </ScrollView>
      </SafeAreaView>
      <Carosol
        activeDotSize={6}
        normalDotSize={4}
        noOfItems={4}
        scrollReference={scrollX}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shutterBody: {
    flex: 18,
    width: "100%",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBodyContainer: {
    flex: 4,
    width: "100%",
  },
});

export default ShutterBody;
