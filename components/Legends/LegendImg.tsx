import React from "react";
import { Image, ImageProps } from "react-native";
import { ThemedView } from "../ThemedView";

type LegendsImgProps = { source: ImageProps["source"] };

export function LegendsImg({ source }: LegendsImgProps) {
  return (
    <ThemedView style={{ width: 300 }}>
      <Image
        source={source}
        style={{ aspectRatio: 1, width: "100%" }}
        resizeMode="contain"
      />
    </ThemedView>
  );
}
