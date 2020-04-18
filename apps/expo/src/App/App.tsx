import { useTheme } from "@listtt/themes";
import React, { FC, useMemo } from "react";
import {
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
        switch: {
          flexDirection: "row",
        },
      }),
    [colors]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={statusBar} />
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.subtext}>Color scheme: {colorScheme}</Text>
      {colorScheme !== "dark" ? (
        <View style={styles.switch}>
          <Text style={styles.subtext}>Force dark color scheme: </Text>
          <Switch
            value={forcedDarkColorScheme}
            onValueChange={forceDarkColorScheme}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default App;
