const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = {
  displayName: "expo-app",
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.ts"],
  transform: {
    ...jestPreset.transform,
    "^.+\\.(js|ts|tsx)$": [require.resolve("babel-jest"), { root: __dirname }],
  },
};
