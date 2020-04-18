jest.mock("@listtt/themes", () => ({
  ...jest.requireActual("@listtt/themes"),
  useTheme: jest.fn(),
}));

import { dark, light, useTheme } from "@listtt/themes";
import { RenderResult, render } from "@testing-library/react-native";
import React from "react";

import App from "./App";

describe("App", () => {
  let result: RenderResult;

  describe("with light appearance", () => {
    beforeEach(() => {
      (useTheme as jest.Mock).mockReturnValue({
        theme: light,
        colorScheme: "light",
        forcedDarkColorScheme: false,
        forceDarkColorScheme: jest.fn().mockName("forceDarkColorScheme"),
      });
      result = render(<App />);
    });

    it("renders dark text", () => {
      expect(result.getByText("Welcome!")).toHaveStyle({
        color: "#303942",
      });
    });

    it("renders dark subtext", () => {
      expect(result.getByText("Color scheme: light")).toHaveStyle({
        color: "#808080",
      });
    });
  });

  describe("with dark appearance", () => {
    beforeEach(() => {
      (useTheme as jest.Mock).mockReturnValue({
        theme: dark,
        colorScheme: "dark",
        forcedDarkColorScheme: false,
        forceDarkColorScheme: jest.fn().mockName("forceDarkColorScheme"),
      });
      result = render(<App />);
    });

    it("renders light text", () => {
      expect(result.getByText("Welcome!")).toHaveStyle({
        color: "#bdc6cf",
      });
    });

    it("renders light subtext", () => {
      expect(result.getByText("Color scheme: dark")).toHaveStyle({
        color: "#7f7f7f",
      });
    });
  });

  describe("with no preference", () => {
    beforeEach(() => {
      (useTheme as jest.Mock).mockReturnValue({
        theme: light,
        colorScheme: "no-preference",
        forcedDarkColorScheme: false,
        forceDarkColorScheme: jest.fn().mockName("forceDarkColorScheme"),
      });
      result = render(<App />);
    });

    it("renders dark text", () => {
      expect(result.getByText("Welcome!")).toHaveStyle({
        color: "#303942",
      });
    });

    it("renders dark subtext", () => {
      expect(result.getByText("Color scheme: no-preference")).toHaveStyle({
        color: "#808080",
      });
    });
  });

  describe("with forced dark appearance", () => {
    beforeEach(() => {
      (useTheme as jest.Mock).mockReturnValue({
        theme: dark,
        colorScheme: "no-preference",
        forcedDarkColorScheme: true,
        forceDarkColorScheme: jest.fn().mockName("forceDarkColorScheme"),
      });
      result = render(<App />);
    });

    it("renders light text", () => {
      expect(result.getByText("Welcome!")).toHaveStyle({
        color: "#bdc6cf",
      });
    });

    it("renders light subtext", () => {
      expect(result.getByText("Color scheme: no-preference")).toHaveStyle({
        color: "#7f7f7f",
      });
    });
  });
});
