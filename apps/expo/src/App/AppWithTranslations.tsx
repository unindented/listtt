import { init as initI18n } from "@listtt/i18n";
import React, { FC, Suspense } from "react";
import { Text } from "react-native";

import ErrorBoundary, { FallbackProps } from "../ErrorBoundary";

import AppWithAppearance from "./AppWithAppearance";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
initI18n();

const AppWithTranslationsError: FC<FallbackProps> = ({ error }) => (
  <Text>{error.message}</Text>
);

const AppWithTranslations: FC = () => {
  return (
    <ErrorBoundary fallback={AppWithTranslationsError}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <AppWithAppearance />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppWithTranslations;
