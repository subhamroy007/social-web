import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { TAG_GAP_RAIO, WINDOW_WIDTH } from "../utility/constants/appConstants";
import AnimatedSafeAreaView from "../utility/ui/animatedSafeAreaView";
import ImagePostMetaText from "./ImagePostMetaText";
import Tag from "./Tag";

export interface ImageFeedPostOverlayProps {
  width: number;
  height: number;
}

const ImageFeedPostOverlay = ({ height, width }: ImageFeedPostOverlayProps) => {
  //reference that controls the opacity of the overlay in animation effect
  const animatedData = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedData, {
      toValue: 1,
      useNativeDriver: true,
      duration: 120,
      easing: Easing.linear,
    }).start();

    return () => {
      animatedData.stopAnimation();
    };
  }, [animatedData]);

  const dynamicOverlayStyle = useMemo(
    () => ({
      width,
      height,
      opacity: animatedData,
    }),
    [width, height, animatedData]
  );

  return (
    <AnimatedSafeAreaView
      edges={["left", "right"]}
      style={[dynamicOverlayStyle, styles.overlay]}
    >
      <ScrollView
        style={styles.overlayScroll}
        contentContainerStyle={styles.overlayScrollContainer}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
      >
        <SafeAreaView edges={[]} style={[styles.metaDataSecion]}>
          <ImagePostMetaText
            filteredReference={["you", "akshay_kumar2.0"]}
            numberOfData={5693}
            icon={{ name: "heart-solid", color: "white", size: 24 }}
            style={{ marginBottom: 16 }}
          />

          <ImagePostMetaText
            filteredReference={["ananyapanda"]}
            numberOfData={90253}
            icon={{ name: "comment-solid", color: "white", size: 24 }}
            style={{ marginBottom: 16 }}
          />

          <ImagePostMetaText
            numberOfData={254}
            icon={{ name: "send", color: "white", size: 24 }}
            style={{ marginBottom: 16 }}
          />
        </SafeAreaView>

        <SafeAreaView edges={[]} style={[styles.tagListSection]}>
          <Tag id="ananyapanda" style={styles.tagListItem} />
          <Tag id="aliya2.0" style={styles.tagListItem} />
          <Tag id="akshay_kumar" style={styles.tagListItem} />
          <Tag id="roybond007" style={styles.tagListItem} />
          <Tag id="sumaxx" style={styles.tagListItem} />
          <Tag id="subrata_kolay" style={styles.tagListItem} />
          <Tag id="babai420" style={styles.tagListItem} />
          <Tag id="kushalroy" style={styles.tagListItem} />
          <Tag id="ananyapanda" style={styles.tagListItem} />
          <Tag id="aliya2.0" style={styles.tagListItem} />
          <Tag id="akshay_kumar" style={styles.tagListItem} />
          <Tag id="roybond007" style={styles.tagListItem} />
          <Tag id="sumaxx" style={styles.tagListItem} />
          <Tag id="subrata_kolay" style={styles.tagListItem} />
          <Tag id="babai420" style={styles.tagListItem} />
          <Tag id="kushalroy" style={styles.tagListItem} />
        </SafeAreaView>
      </ScrollView>
    </AnimatedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    top: 0,
    left: 0,
    zIndex: 10,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  metaDataSecion: {
    maxWidth: "75%",
  },
  tagListSection: {
    marginTop: 32,
    maxWidth: "85%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  overlayScroll: {
    flex: 1,
    width: "100%",
  },
  overlayScrollContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  tagListItem: {
    marginTop: TAG_GAP_RAIO * WINDOW_WIDTH,
    marginRight: TAG_GAP_RAIO * WINDOW_WIDTH,
  },
});

export default ImageFeedPostOverlay;
