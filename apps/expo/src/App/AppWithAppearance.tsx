import React, { FC } from "react";
import { AppearanceProvider } from "react-native-appearance";

import AppWithTheme from "./AppWithTheme";

const AppWithAppearance: FC = () => (
  <AppearanceProvider>
    <AppWithTheme />
  </AppearanceProvider>
);

export default AppWithAppearance;
