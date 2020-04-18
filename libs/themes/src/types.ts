import { Dispatch, SetStateAction } from "react";
import { ColorSchemeName } from "react-native-appearance";

import { Theme } from "./themes";

export interface ThemeContextValue {
  readonly theme: Theme;
  readonly colorScheme: ColorSchemeName;
  readonly forcedDarkColorScheme: boolean;
  readonly forceDarkColorScheme: Dispatch<SetStateAction<boolean>>;
}
