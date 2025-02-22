export type WeaponClass =
  | "AR"
  | "LMG"
  | "Marksman"
  | "Pistol"
  | "Shotgun"
  | "SMG"
  | "Sniper";

export type ARWeapon = "Havoc" | "R-301" | "Flatline" | "Nemesis" | "Hemlok";

export type LMGWeapon = "Devotion" | "L-Star" | "Spitfire" | "Rampage";

export type MarksmanWeapon = "3030-Repeater" | "G7Scount" | "TripleTake";

export type PistolWeapon = "P2020" | "RE-45" | "Wingman";

export type ShotgunWeapon = "EVA-8" | "Mastiff" | "Mozambique" | "Peacekeeper";

export type SMGWeapon = "R-99" | "Car" | "Alternator" | "Volt" | "Prowler";

export type SniperWeapon = "ChargeRifle" | "Longbow" | "Sentinel";

export type Weapon =
  | ARWeapon
  | LMGWeapon
  | MarksmanWeapon
  | PistolWeapon
  | ShotgunWeapon
  | SMGWeapon
  | SniperWeapon;
