import React from "react";
import { Image, ImageProps } from "react-native";
import { ThemedView } from "../ThemedView";

type WeaponsImgProps = { source: ImageProps["source"] };

export function WeaponsImg({ source }: WeaponsImgProps) {
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
