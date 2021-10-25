import React, { useCallback, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";

export interface AvatarProps {
  size: number;
  url: string;
}

const Avatar = (props: AvatarProps) => {
  const [hasUnseenStroy, setUnseenStroy] = useState<boolean>(true);

  const avatarPressHandler = useCallback(() => {
    setUnseenStroy((state) => !state);
  }, [setUnseenStroy]);

  const imageSource: ImageSourcePropType = {
    uri: props.url,
    height: props.size,
    width: props.size,
    cache: "default",
    scale: 1.0,
    method: "GET",
  };

  return (
    <TouchableWithoutFeedback onPress={avatarPressHandler}>
      <SafeAreaView
        edges={[]}
        style={[
          globalColors.avatarContainerColor,
          {
            width: props.size,
            height: props.size,
            backgroundColor: hasUnseenStroy ? "#205EFF" : "#FDFDFD",
            borderRadius: Math.floor(props.size / 2),
          },
          styles.avatarContainer,
        ]}
      >
        <Image
          source={imageSource}
          resizeMethod="resize"
          resizeMode="cover"
          style={[
            globalColors.avatarColor,
            {
              width: props.size - 6,
              height: props.size - 6,
              borderRadius: Math.floor(props.size / 2 - 3),
            },
          ]}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

export default Avatar;
