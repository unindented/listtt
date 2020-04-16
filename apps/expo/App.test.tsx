import { RenderResult, render } from "@testing-library/react-native";
import React from "react";

import App from "./App";

describe("App", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<App />);
  });

  it("renders text", () => {
    expect(result.getByText("Welcome!")).toHaveStyle({
      color: "#303942",
    });
  });
});
