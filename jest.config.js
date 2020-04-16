module.exports = {
  coverageReporters: ["text", "text-summary", "html", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  projects: ["apps/*"],
};
