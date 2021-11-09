import React from "react";
import { ListRenderItemInfo, StyleSheet } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { WINDOW_WIDTH } from "../utility/constants/appConstants";
import { globalLayouts } from "../utility/style/layout";

export const ImageGalleryItem = () => {
  const width = Math.floor(Math.random() * 300 + 200);
  const height = Math.floor(Math.random() * 300 + 200);

  const imageSource: Source = {
    cache: "immutable",
    priority: "high",
    uri: "https://source.unsplash.com/random/" + width + "x" + height,
  };

  return (
    <SafeAreaView edges={[]} style={[styles.galleryItemContainer]}>
      <FastImage
        source={imageSource}
        style={styles.galleryItem}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const renderFunction = (item: ListRenderItemInfo<number>) => {
  return <ImageGalleryItem />;
};

const ImageGallery = () => {
  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={[globalLayouts.tabLayout]}
    >
      <FlatList
        style={styles.galleryList}
        data={data}
        renderItem={renderFunction}
        keyExtractor={(item, index) => "item" + index}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  galleryList: {
    flex: 1,
    width: "100%",
  },
  galleryItemContainer: {
    width: WINDOW_WIDTH / 3,
    height: WINDOW_WIDTH / 3,
  },
  galleryItem: {
    width: WINDOW_WIDTH / 3 - 1,
    height: WINDOW_WIDTH / 3 - 1,
    padding: 1,
    backgroundColor: "white",
  },
});

export default ImageGallery;
