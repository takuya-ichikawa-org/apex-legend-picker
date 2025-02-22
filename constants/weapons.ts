import {
  ARWeapon,
  LMGWeapon,
  MarksmanWeapon,
  PistolWeapon,
  ShotgunWeapon,
  SMGWeapon,
  SniperWeapon,
  Weapon,
  WeaponClass,
} from "@/types/weapons";
import { ImageProps } from "react-native";

export const WEAPON_CLASSES: WeaponClass[] = [
  "AR",
  "LMG",
  "Marksman",
  "Pistol",
  "Shotgun",
  "SMG",
  "Sniper",
];

export const AR_WEAPONS: ARWeapon[] = [
  "Havoc",
  "R-301",
  "Flatline",
  "Nemesis",
  "Hemlok",
];

export const LMG_WEAPONS: LMGWeapon[] = [
  "Devotion",
  "L-Star",
  "Spitfire",
  "Rampage",
];

export const MARKSMAN_WEAPONS: MarksmanWeapon[] = [
  "3030-Repeater",
  "G7Scount",
  "TripleTake",
];

export const PISTOL_WEAPONS: PistolWeapon[] = ["P2020", "RE-45", "Wingman"];

export const SHOTGUN_WEAPONS: ShotgunWeapon[] = [
  "EVA-8",
  "Mastiff",
  "Mozambique",
  "Peacekeeper",
];

export const SMG_WEAPONS: SMGWeapon[] = [
  "R-99",
  "Car",
  "Alternator",
  "Volt",
  "Prowler",
];

export const SNIPER_WEAPONS: SniperWeapon[] = [
  "ChargeRifle",
  "Longbow",
  "Sentinel",
];

export const CLASS_WEAPONS_MAP = {
  AR: AR_WEAPONS,
  LMG: LMG_WEAPONS,
  Marksman: MARKSMAN_WEAPONS,
  Pistol: PISTOL_WEAPONS,
  Shotgun: SHOTGUN_WEAPONS,
  SMG: SMG_WEAPONS,
  Sniper: SNIPER_WEAPONS,
} satisfies {
  [key in WeaponClass]: Weapon[];
};

export const WeaponImgSource: { [key in Weapon]: ImageProps["source"] } = {
  Havoc: require("@/assets/images/weapons/ar/HAVOC_Rifle.webp"),
  "R-301": require("@/assets/images/weapons/ar/R-301_Carbine.webp"),
  Flatline: require("@/assets/images/weapons/ar/VK-47_Flatline.webp"),
  Nemesis: require("@/assets/images/weapons/ar/Nemesis_Burst_AR.webp"),
  Hemlok: require("@/assets/images/weapons/ar/Hemlok_Burst_AR.webp"),
  Devotion: require("@/assets/images/weapons/lmg/Devotion_LMG.webp"),
  "L-Star": require("@/assets/images/weapons/lmg/L-STAR_EMG.webp"),
  Spitfire: require("@/assets/images/weapons/lmg/M600_Spitfire.webp"),
  Rampage: require("@/assets/images/weapons/lmg/Rampage_LMG.webp"),
  "3030-Repeater": require("@/assets/images/weapons/marksman/30-30_Repeater.webp"),
  G7Scount: require("@/assets/images/weapons/marksman/G7_Scout.webp"),
  TripleTake: require("@/assets/images/weapons/marksman/Triple_Take.webp"),
  P2020: require("@/assets/images/weapons/pistol/P2020.webp"),
  "RE-45": require("@/assets/images/weapons/pistol/RE-45_Auto.webp"),
  Wingman: require("@/assets/images/weapons/pistol/Wingman.webp"),
  "EVA-8": require("@/assets/images/weapons/shotgun/EVA-8_Auto.webp"),
  Mastiff: require("@/assets/images/weapons/shotgun/Mastiff_Shotgun.webp"),
  Mozambique: require("@/assets/images/weapons/shotgun/Mozambique_Shotgun.webp"),
  Peacekeeper: require("@/assets/images/weapons/shotgun/Peacekeeper.webp"),
  "R-99": require("@/assets/images/weapons/smg/R-99_SMG.webp"),
  Car: require("@/assets/images/weapons/smg/C.A.R._SMG.webp"),
  Alternator: require("@/assets/images/weapons/smg/Alternator_SMG.webp"),
  Volt: require("@/assets/images/weapons/smg/Volt_SMG.webp"),
  Prowler: require("@/assets/images/weapons/smg/Prowler_Burst_PDW.webp"),
  ChargeRifle: require("@/assets/images/weapons/sniper/Charge_Rifle.webp"),
  Longbow: require("@/assets/images/weapons/sniper/Longbow_DMR.webp"),
  Sentinel: require("@/assets/images/weapons/sniper/Sentinel.webp"),
};
