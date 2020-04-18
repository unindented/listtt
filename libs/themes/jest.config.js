module.exports = {
  displayName: "themes",
  transform: {
    "^.+\\.(js|ts|tsx)$": [require.resolve("babel-jest"), { root: __dirname }],
  },
};
