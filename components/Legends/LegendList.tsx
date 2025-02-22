import {
  CLASS_LEGENDS_MAP,
  LEGEND_CLASSES,
  LegendImgSource,
} from "@/constants/legends";
import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { LegendsImg } from "./LegendImg";

export function LegendList() {
  return (
    <>
      {LEGEND_CLASSES.map((lClass) => (
        <React.Fragment key={lClass}>
          <ThemedText type="subtitle">{lClass}</ThemedText>
          <ThemedView
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}
          >
            {CLASS_LEGENDS_MAP[lClass].map((legend) => {
              return (
                <ThemedView key={legend}>
                  <ThemedText type="default">{legend}</ThemedText>
                  <LegendsImg source={LegendImgSource[legend]} />
                </ThemedView>
              );
            })}
          </ThemedView>
        </React.Fragment>
      ))}
    </>
  );
}
