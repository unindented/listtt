import { BackendModule, ReadCallback } from "i18next";

export default class WebBackend implements BackendModule {
  public static readonly type = "backend";
  public readonly type = "backend";

  public constructor() {
    this.init();
  }

  public init(): void {}

  public read(lng: string, ns: string, callback: ReadCallback): void {
    import(
      /* webpackChunkName: "locale-[request]" */ `../../locales/${lng}/${ns}.json`
    )
      .then(({ default: data }) => callback(null, data))
      .catch((error) => callback(error, false));
  }

  public create(): void {}
}
