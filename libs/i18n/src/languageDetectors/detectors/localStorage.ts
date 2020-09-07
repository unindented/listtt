import { LanguageDetector, LanguageDetectorOptions } from "./types";

type RequiredLanguageDetectorOptions = Required<
  Pick<LanguageDetectorOptions, "lookupLocalStorage">
>;

const defaultOptions: RequiredLanguageDetectorOptions = {
  lookupLocalStorage: "lng",
};

const detector: LanguageDetector = {
  lookup: (options: RequiredLanguageDetectorOptions = defaultOptions) =>
    window.localStorage.getItem(options.lookupLocalStorage) ?? undefined,

  cacheUserLanguage: (
    lng,
    options: RequiredLanguageDetectorOptions = defaultOptions
  ) => {
    window.localStorage.setItem(options.lookupLocalStorage, lng);
  },
};

export default detector;
