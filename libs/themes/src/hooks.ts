import { useContext } from "react";

import ThemeContext from "./ThemeContext";
import { ThemeContextValue } from "./types";

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);
