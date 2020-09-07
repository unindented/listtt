jest.mock("expo-localization", () => ({ locale: "es-ES" }));

import detector from "./expo";

describe("expo", () => {
  describe(".lookup", () => {
    it("returns the language provided by `expo`", () => {
      expect(detector.lookup()).toBe("es-ES");
    });
  });
});
