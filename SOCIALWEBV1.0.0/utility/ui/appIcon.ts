import fontelloConfig from "../../config.json";
import { createIconSet, createIconSetFromFontello } from "@expo/vector-icons";

//create the custom icons set with the custom icons font and fontello configuration file
export const CustomIcon = createIconSetFromFontello(
  fontelloConfig,
  "icons",
  "icons"
);
