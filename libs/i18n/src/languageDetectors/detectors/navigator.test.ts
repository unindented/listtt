import detector from "./navigator";

describe("navigator", () => {
  describe(".lookup", () => {
    beforeEach(() => {
      Object.defineProperty(navigator, "language", { value: "es-ES" });
    });

    it("returns the language provided by `navigator`", () => {
      expect(detector.lookup()).toBe("es-ES");
    });
  });
});
