module.exports = (api) => {
  api.cache(true);

  const targets = { node: "current" };

  const presets = [
    ["@babel/preset-env", { targets }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ];

  return {
    presets,
    plugins,
  };
};
