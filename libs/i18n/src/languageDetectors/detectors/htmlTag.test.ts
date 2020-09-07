import detector from "./htmlTag";

describe("htmlTag", () => {
  describe(".lookup", () => {
    describe("with a `lang` attribute on the `<html>` tag", () => {
      beforeEach(() => {
        jest
          .spyOn(document.documentElement, "getAttribute")
          .mockReturnValue("es-ES");
      });

      it("returns the language", () => {
        expect(detector.lookup()).toBe("es-ES");
      });
    });

    describe("without a `lang` attribute on the `<html>` tag", () => {
      beforeEach(() => {
        jest
          .spyOn(document.documentElement, "getAttribute")
          .mockReturnValue(null);
      });

      it("returns `undefined`", () => {
        expect(detector.lookup()).toBeUndefined();
      });
    });
  });
});
