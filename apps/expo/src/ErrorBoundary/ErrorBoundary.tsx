import React, { Component, ComponentType, ReactNode } from "react";

export interface FallbackProps {
  readonly error: Error;
}

export type Fallback = ComponentType<FallbackProps>;

export interface ErrorBoundaryProps {
  readonly fallback: Fallback;
}

export interface ErrorBoundaryState {
  readonly error: Error | undefined;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    error: undefined,
  };

  public static getDerivedStateFromError(
    error: Error
  ): Partial<ErrorBoundaryState> {
    return { error };
  }

  public componentDidCatch(error: Error): void {
    console.error(error);
  }

  public render(): ReactNode {
    const { fallback: Fallback, children } = this.props;

    return this.state.error ? <Fallback error={this.state.error} /> : children;
  }
}
