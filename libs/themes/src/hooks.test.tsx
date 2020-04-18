import { HookResult, act, renderHook } from "@testing-library/react-hooks";
import React, { FC } from "react";

import ThemeProvider from "./ThemeProvider";
import { useTheme } from "./hooks";
import { dark, light } from "./themes";
import { ThemeContextValue } from "./types";

describe("useTheme", () => {
  let result: HookResult<ThemeContextValue>;

  describe("with a light color scheme", () => {
    beforeEach(() => {
      const Wrapper: FC = (props) => (
        <ThemeProvider {...props} colorScheme="light" />
      );
      const renderResult = renderHook(() => useTheme(), { wrapper: Wrapper });
      result = renderResult.result;
    });

    it("returns the light theme", () => {
      const { theme } = result.current;
      expect(theme).toBe(light);
    });

    it("returns the light color scheme", () => {
      const { colorScheme } = result.current;
      expect(colorScheme).toBe("light");
    });
  });

  describe("with a dark color scheme", () => {
    beforeEach(() => {
      const Wrapper: FC = (props) => (
        <ThemeProvider {...props} colorScheme="dark" />
      );
      const renderResult = renderHook(() => useTheme(), { wrapper: Wrapper });
      result = renderResult.result;
    });

    it("returns the dark theme", () => {
      const { theme } = result.current;
      expect(theme).toBe(dark);
    });

    it("returns the dark color scheme", () => {
      const { colorScheme } = result.current;
      expect(colorScheme).toBe("dark");
    });
  });

  describe("without preference", () => {
    beforeEach(() => {
      const Wrapper: FC = (props) => (
        <ThemeProvider {...props} colorScheme="no-preference" />
      );
      const renderResult = renderHook(() => useTheme(), { wrapper: Wrapper });
      result = renderResult.result;
    });

    it("returns the light theme", () => {
      const { theme } = result.current;
      expect(theme).toBe(light);
    });

    it("returns no preference", () => {
      const { colorScheme } = result.current;
      expect(colorScheme).toBe("no-preference");
    });
  });

  describe("forcing dark color scheme", () => {
    beforeEach(async () => {
      const Wrapper: FC = (props) => (
        <ThemeProvider {...props} colorScheme="no-preference" />
      );
      const renderResult = renderHook(() => useTheme(), { wrapper: Wrapper });
      result = renderResult.result;

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      act(() => {
        result.current.forceDarkColorScheme(true);
      });
    });

    it("returns the dark theme", () => {
      const { theme } = result.current;
      expect(theme).toBe(dark);
    });

    it("returns no preference", () => {
      const { colorScheme } = result.current;
      expect(colorScheme).toBe("no-preference");
    });

    it("notifies us of forced dark color scheme", () => {
      const { forcedDarkColorScheme } = result.current;
      expect(forcedDarkColorScheme).toBe(true);
    });
  });

  describe("without a wrapping theme provider", () => {
    beforeEach(async () => {
      const renderResult = renderHook(() => useTheme());
      result = renderResult.result;
    });

    it("throws", async () => {
      expect(() => {
        result.current.forceDarkColorScheme(true);
      }).toThrowErrorMatchingInlineSnapshot(
        `"You should not use <ThemeContext> outside a <ThemeProvider>"`
      );
    });
  });
});
