import React, { FC, useState } from "react";
import { ColorSchemeName } from "react-native-appearance";

import ThemeContext from "./ThemeContext";
import { dark, light } from "./themes";

export interface ThemeProviderProps {
  readonly colorScheme: ColorSchemeName;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ colorScheme, ...props }) => {
  const [forcedDarkColorScheme, forceDarkColorScheme] = useState(false);

  const theme = colorScheme === "dark" || forcedDarkColorScheme ? dark : light;
  const value = {
    theme,
    colorScheme,
    forcedDarkColorScheme,
    forceDarkColorScheme,
  };

  return <ThemeContext.Provider {...props} value={value} />;
};

export default ThemeProvider;
