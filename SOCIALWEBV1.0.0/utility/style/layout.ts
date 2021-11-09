import { StyleSheet } from "react-native";
import { WINDOW_WIDTH } from "../constants/appConstants";

export const globalLayouts = StyleSheet.create({
  screenLayout: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  tabLayout: {
    width: WINDOW_WIDTH,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
