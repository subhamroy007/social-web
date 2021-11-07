import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import FastImage, { ImageStyle, Source } from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { AVATAR_PHOTO_TO_GAP_RATIO } from "../utility/constants/appConstants";

export interface AvatarProps {
  size: number;
  url: string;
  style?: StyleProp<ViewStyle>;
}

const Avatar = ({ size, url, style }: AvatarProps) => {
  const avatarSource: Source = useMemo(
    () => ({
      uri: url,
      cache: "immutable",
      priority: "high",
    }),
    [url]
  );

  const avatarDynamicStyle: ImageStyle = useMemo(
    () => ({ width: size, height: size, borderRadius: size * 0.5 }),
    [size]
  );

  const avatarContainerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      padding: AVATAR_PHOTO_TO_GAP_RATIO * size,
      borderWidth: AVATAR_PHOTO_TO_GAP_RATIO * size,
      borderColor: "blue",
      borderRadius: (1 + 4 * AVATAR_PHOTO_TO_GAP_RATIO) * size * 0.5,
    }),
    [size]
  );

  return (
    <SafeAreaView edges={[]} style={[avatarContainerDynamicStyle, style]}>
      <FastImage
        source={avatarSource}
        resizeMode="cover"
        style={[avatarDynamicStyle]}
      />
    </SafeAreaView>
  );
};

export default Avatar;
