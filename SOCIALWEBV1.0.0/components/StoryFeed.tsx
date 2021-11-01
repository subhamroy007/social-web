import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "./Avatar";

const dummyData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] as number[];

const renderFunc = (item: ListRenderItemInfo<number>) => {
  console.log("function called for story avatar");
  return (
    <Avatar
      size={64}
      url="https://source.unsplash.com/random/64x64"
      style={{ marginHorizontal: 5 }}
    />
  );
};

const StoryFeed = () => {
  console.log("rendering story feed");
  return (
    <SafeAreaView style={styles.storyFeedContainer} edges={[]}>
      <FlatList
        data={dummyData}
        keyExtractor={(item, index) => index.toLocaleString()}
        renderItem={renderFunc}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.storyFeedList}
        contentContainerStyle={styles.storyFeedListContent}
        initialNumToRender={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storyFeedContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    width: "100%",
    height: 74,
  },
  storyFeedList: {
    flex: 1,
  },
  storyFeedListContent: {
    padding: 5,
  },
});

export default StoryFeed;
