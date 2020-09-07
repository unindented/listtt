import { supportedLanguages, useTranslation } from "@listtt/i18n";
import { useTheme } from "@listtt/themes";
import React, { FC, useCallback, useMemo } from "react";
import {
  Picker,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const App: FC = () => {
  const {
    theme: { statusBar, colors },
    colorScheme,
    forcedDarkColorScheme,
    forceDarkColorScheme,
  } = useTheme();
  const { t, i18n } = useTranslation();

  const onLanguageChange = useCallback(
    (lng: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  // const onLanguageChanged = useCallback((lng: string): void => {
  //   document.documentElement.setAttribute("lang", lng);
  // }, []);

  // useEffect(() => {
  //   onLanguageChanged(i18n.language);

  //   i18n.on("languageChanged", onLanguageChanged);

  //   return (): void => {
  //     i18n.off("languageChanged", onLanguageChanged);
  //   };
  // }, [i18n, onLanguageChanged]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bodyBackground,
        },
        text: {
          color: colors.bodyText,
        },
        subtext: {
          color: colors.bodySubtext,
        },
        row: {
          flexDirection: "row",
        },
        picker: {
          minWidth: 100,
        },
      }),
    [colors]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={statusBar} />
      <Text style={styles.text}>{t("welcome")}</Text>
      <Text style={styles.subtext}>Color scheme: {colorScheme}</Text>
      {colorScheme !== "dark" ? (
        <View style={styles.row}>
          <Text style={styles.subtext}>Force dark color scheme: </Text>
          <Switch
            value={forcedDarkColorScheme}
            onValueChange={forceDarkColorScheme}
          />
        </View>
      ) : null}
      <Text style={styles.subtext}>
        Language: {JSON.stringify(i18n.languages)}
      </Text>
      <View style={styles.row}>
        <Text style={styles.subtext}>Change language: </Text>
        <Picker
          style={styles.picker}
          selectedValue={i18n.language}
          onValueChange={onLanguageChange}
        >
          {Object.keys(supportedLanguages).map((lng) => (
            <Picker.Item
              key={lng}
              value={lng}
              label={supportedLanguages[lng as keyof typeof supportedLanguages]}
            />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default App;
