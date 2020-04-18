import { ThemeProvider } from "@listtt/themes";
import React, { FC } from "react";
import { useColorScheme } from "react-native-appearance";

import App from "./App";

const AppWithTheme: FC = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider colorScheme={colorScheme}>
      <App />
    </ThemeProvider>
  );
};

export default AppWithTheme;
