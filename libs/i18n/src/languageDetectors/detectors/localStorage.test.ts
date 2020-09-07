import detector from "./localStorage";

describe("localStorage", () => {
  describe(".lookup", () => {
    describe("when there is a language in `localStorage`", () => {
      beforeEach(() => {
        localStorage.setItem("lng", "es-ES");
      });

      it("returns the language", () => {
        expect(detector.lookup()).toBe("es-ES");
      });
    });

    describe("when there is not a language in `localStorage`", () => {
      beforeEach(() => {
        localStorage.removeItem("lng");
      });

      it("returns `undefined`", () => {
        expect(detector.lookup()).toBeUndefined();
      });
    });
  });

  describe(".cacheUserLanguage", () => {
    it("stores the language in `localStorage`", () => {
      if (detector.cacheUserLanguage) {
        detector.cacheUserLanguage("es-MX");
      }
      expect(localStorage.getItem("lng")).toBe("es-MX");
    });
  });
});
