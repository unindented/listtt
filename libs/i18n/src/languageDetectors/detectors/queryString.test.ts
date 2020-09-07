import detector from "./queryString";

describe("queryString", () => {
  describe(".lookup", () => {
    describe("when query string contains a language", () => {
      beforeEach(() => {
        history.replaceState(null, "", "?lng=es-ES");
      });

      it("returns the language", () => {
        expect(detector.lookup()).toBe("es-ES");
      });
    });

    describe("when query string contains multiple languages", () => {
      beforeEach(() => {
        history.replaceState(null, "", "?lng=es-ES&lng=es-MX");
      });

      it("returns the first language", () => {
        expect(detector.lookup()).toBe("es-ES");
      });
    });

    describe("when query string does not contain language", () => {
      beforeEach(() => {
        history.replaceState(null, "", "?foo=bar");
      });

      it("returns `undefined`", () => {
        expect(detector.lookup()).toBeUndefined();
      });
    });
  });
});
