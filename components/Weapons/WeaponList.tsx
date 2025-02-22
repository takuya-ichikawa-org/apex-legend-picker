import {
  CLASS_WEAPONS_MAP,
  WEAPON_CLASSES,
  WeaponImgSource,
} from "@/constants/weapons";
import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { WeaponsImg } from "./WeaponImg";

export function WeaponList() {
  return (
    <>
      {WEAPON_CLASSES.map((wClass) => (
        <React.Fragment key={wClass}>
          <ThemedText type="subtitle">{wClass}</ThemedText>
          <ThemedView
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}
          >
            {CLASS_WEAPONS_MAP[wClass].map((weapon) => {
              return (
                <ThemedView key={weapon}>
                  <ThemedText type="default">{weapon}</ThemedText>
                  <WeaponsImg source={WeaponImgSource[weapon]} />
                </ThemedView>
              );
            })}
          </ThemedView>
        </React.Fragment>
      ))}
    </>
  );
}
