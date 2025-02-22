import {
  AssaultLegend,
  ControllerLegend,
  Legend,
  LegendClass,
  ReconLegend,
  SkirmisherLegend,
  SupportLegend,
} from "@/types/legends";
import { ImageProps } from "react-native";

export const LEGEND_CLASSES: LegendClass[] = [
  "Assault",
  "Controller",
  "Recon",
  "Skirmisher",
  "Support",
];

export const ASSAULT_LEGENDS: AssaultLegend[] = [
  "Ash",
  "Ballistic",
  "Bangalore",
  "Fuse",
  "MadMaggie",
];

export const CONTROLLER_LEGENDS: ControllerLegend[] = [
  "Catalyst",
  "Caustic",
  "Rampart",
  "Wattson",
];

export const RECON_LEGENDS: ReconLegend[] = [
  "Bloodhound",
  "Crypto",
  "Seer",
  "Vantage",
];

export const SKIRMISHER_LEGENDS: SkirmisherLegend[] = [
  "Alter",
  "Horizon",
  "Octane",
  "Pathfinder",
  "Revenant",
  "Valkyrie",
  "Wraith",
];

export const SUPPORT_LEGENDS: SupportLegend[] = [
  "Conduit",
  "Gibraltar",
  "Lifeline",
  "Loba",
  "Mirage",
  "Newcastle",
];
export const CLASS_LEGENDS_MAP = {
  Assault: ASSAULT_LEGENDS,
  Controller: CONTROLLER_LEGENDS,
  Recon: RECON_LEGENDS,
  Skirmisher: SKIRMISHER_LEGENDS,
  Support: SUPPORT_LEGENDS,
} satisfies {
  [key in LegendClass]: Legend[];
};

export const LegendImgSource: { [key in Legend]: ImageProps["source"] } = {
  Ash: require("@/assets/images/legends/assault/apex-grid-tile-legends-Ash.avif"),
  Ballistic: require("@/assets/images/legends/assault/apex-grid-tile-legends-Ballistic.avif"),
  Bangalore: require("@/assets/images/legends/assault/apex-grid-tile-legends-Bangalore.avif"),
  Fuse: require("@/assets/images/legends/assault/apex-grid-tile-legends-Fuse.avif"),
  MadMaggie: require("@/assets/images/legends/assault/apex-grid-tile-legends-MadMaggie.avif"),
  Catalyst: require("@/assets/images/legends/controller/apex-grid-tile-legends-Catalyst.avif"),
  Caustic: require("@/assets/images/legends/controller/apex-grid-tile-legends-Caustic.avif"),
  Rampart: require("@/assets/images/legends/controller/apex-grid-tile-legends-Rampart.avif"),
  Wattson: require("@/assets/images/legends/controller/apex-grid-tile-legends-Wattson.avif"),
  Bloodhound: require("@/assets/images/legends/recon/apex-grid-tile-legends-Bloodhound.avif"),
  Crypto: require("@/assets/images/legends/recon/apex-grid-tile-legends-Crypto.avif"),
  Seer: require("@/assets/images/legends/recon/apex-grid-tile-legends-Seer.avif"),
  Vantage: require("@/assets/images/legends/recon/apex-grid-tile-legends-Vantage.avif"),
  Alter: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Alter.avif"),
  Horizon: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Horizon.avif"),
  Octane: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Octane.avif"),
  Pathfinder: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Pathfinder.avif"),
  Revenant: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Revenant.avif"),
  Valkyrie: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Valkyrie.avif"),
  Wraith: require("@/assets/images/legends/skirmisher/apex-grid-tile-legends-Wraith.avif"),
  Conduit: require("@/assets/images/legends/support/apex-grid-tile-legends-Conduit.avif"),
  Gibraltar: require("@/assets/images/legends/support/apex-grid-tile-legends-Gibraltar.avif"),
  Lifeline: require("@/assets/images/legends/support/apex-grid-tile-legends-Lifeline.avif"),
  Loba: require("@/assets/images/legends/support/apex-grid-tile-legends-Loba.avif"),
  Mirage: require("@/assets/images/legends/support/apex-grid-tile-legends-Mirage.avif"),
  Newcastle: require("@/assets/images/legends/support/apex-grid-tile-legends-Newcastle.avif"),
};
