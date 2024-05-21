import { ReactNode } from "react";

export enum ViewModel {
  "CURRENT",
  "ACTIVE",
  "EMPTY",
  "COPIED",
}

export enum StrengthLevelModel {
  "NONE",
  "TOO WEAK!",
  "WEAK",
  "MEDIUM",
  "STRONG",
}

export type CaracteristicsModel = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  strength: StrengthLevelModel;
  [key: string]: boolean | number | StrengthLevelModel | undefined;
};

export type ProviderProps = {
  children: ReactNode;
};
