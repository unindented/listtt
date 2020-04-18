const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = (env, argv) =>
  createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["@listtt"],
      },
    },
    argv
  );
