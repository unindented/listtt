import { StatusBarStyle } from "react-native";

export interface ThemeColors {
  readonly bodyBackground: string;
  readonly bodyText: string;
  readonly bodySubtext: string;
}

export interface Theme {
  readonly statusBar: StatusBarStyle;
  readonly colors: ThemeColors;
}
