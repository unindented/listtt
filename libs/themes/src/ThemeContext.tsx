import { createContext } from "react";

import { light } from "./themes";
import { ThemeContextValue } from "./types";

const defaultContextValue: ThemeContextValue = {
  theme: light,
  colorScheme: "light",
  forcedDarkColorScheme: false,
  forceDarkColorScheme: (): never => {
    throw new Error(
      "You should not use <ThemeContext> outside a <ThemeProvider>"
    );
  },
};

const ThemeContext = createContext(defaultContextValue);

export default ThemeContext;
