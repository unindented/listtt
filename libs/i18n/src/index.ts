import i18n, { FormatFunction, InitOptions, TFunction } from "i18next";
import { initReactI18next } from "react-i18next";

import supportedLanguages from "../locales/locales.json";

import Backend from "./backends";
import LanguageDetector from "./languageDetectors";

export { useTranslation } from "react-i18next";

export { supportedLanguages };

const getNumberFormat = (lng?: string): Intl.NumberFormat =>
  new Intl.NumberFormat(lng);

const format: FormatFunction = (value, fmt, lng) => {
  switch (fmt) {
    case "number":
      return getNumberFormat(lng).format(value);
    default:
      return String(value);
  }
};

export const init = (options: InitOptions = {}): Promise<TFunction> =>
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV === "development",

      fallbackLng: "en",
      saveMissing: false,

      interpolation: {
        escapeValue: false,
        format,
      },

      ...options,
    });
