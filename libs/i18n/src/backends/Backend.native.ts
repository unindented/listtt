import { BackendModule, ReadCallback } from "i18next";

import { supportedLanguages } from "..";

const translations: Record<
  keyof typeof supportedLanguages,
  Record<"translation", () => object>
> = {
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  ar: {
    translation: (): object => require("../../locales/ar/translation.json"),
  },
  de: {
    translation: (): object => require("../../locales/de/translation.json"),
  },
  en: {
    translation: (): object => require("../../locales/en/translation.json"),
  },
  es: {
    translation: (): object => require("../../locales/es/translation.json"),
  },
  fr: {
    translation: (): object => require("../../locales/fr/translation.json"),
  },
  he: {
    translation: (): object => require("../../locales/he/translation.json"),
  },
  it: {
    translation: (): object => require("../../locales/it/translation.json"),
  },
  /* eslint-enable @typescript-eslint/no-unsafe-return */
};

export default class NativeBackend implements BackendModule {
  public static readonly type = "backend";
  public readonly type = "backend";

  public constructor() {
    this.init();
  }

  public init(): void {}

  public read(
    lng: keyof typeof translations,
    ns: "translation",
    callback: ReadCallback
  ): void {
    try {
      return callback(null, translations[lng][ns]());
    } catch (error) {
      return callback(error, false);
    }
  }

  public create(): void {}
}
