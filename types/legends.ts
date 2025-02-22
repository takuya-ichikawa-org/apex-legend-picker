export type LegendClass =
  | "Assault"
  | "Controller"
  | "Recon"
  | "Skirmisher"
  | "Support";

export type AssaultLegend =
  | "Ash"
  | "Ballistic"
  | "Bangalore"
  | "Fuse"
  | "MadMaggie";

export type ControllerLegend = "Catalyst" | "Caustic" | "Rampart" | "Wattson";

export type ReconLegend = "Bloodhound" | "Crypto" | "Seer" | "Vantage";

export type SkirmisherLegend =
  | "Alter"
  | "Horizon"
  | "Octane"
  | "Pathfinder"
  | "Revenant"
  | "Valkyrie"
  | "Wraith";

export type SupportLegend =
  | "Conduit"
  | "Gibraltar"
  | "Lifeline"
  | "Loba"
  | "Mirage"
  | "Newcastle";

export type Legend =
  | AssaultLegend
  | ControllerLegend
  | ReconLegend
  | SkirmisherLegend
  | SupportLegend;
