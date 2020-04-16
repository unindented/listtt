import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#303942",
  },
});
