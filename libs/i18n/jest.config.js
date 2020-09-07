module.exports = {
  displayName: "i18n",
  transform: {
    "^.+\\.(js|ts|tsx)$": [require.resolve("babel-jest"), { root: __dirname }],
  },
};
