import React, { FC } from "react";

import ErrorBoundary, { Fallback } from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(noop);
  });

  describe("when things are fine", () => {
    beforeEach(() => {
      const TestError: Fallback = () => <div>Something went wrong.</div>;
      const GoodChild: FC = () => <div>OHAI</div>;
      component = mount(
        <ErrorBoundary fallback={TestError}>
          <GoodChild />
        </ErrorBoundary>
      );
    });

    afterEach(() => {
      component.unmount();
    });

    it("renders its children", () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe("when an error occurs", () => {
    let err: Error;

    beforeEach(() => {
      err = new Error("BOOM");

      const TestError: Fallback = ({ error }) => (
        // tslint:disable-next-line: no-non-null-assertion
        <div>{`Something went wrong. ${error!.message}.`}</div>
      );
      const BadChild = () => {
        throw err;
      };
      component = mount(
        <ErrorBoundary fallback={TestError}>
          <BadChild />
        </ErrorBoundary>
      );
    });

    afterEach(() => {
      component.unmount();
    });

    it("renders an error message", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
