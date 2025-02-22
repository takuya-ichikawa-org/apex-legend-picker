import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { LegendList } from "@/components/Legends/LegendList";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function LegendsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: "#323232",
        dark: "#323232",
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Legends</ThemedText>
        <HelloWave />
      </ThemedView>
      <LegendList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
