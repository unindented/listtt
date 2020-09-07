export interface LanguageDetectorOptions {
  readonly lookupQueryString?: string;
  readonly lookupLocalStorage?: string;
}

export interface LanguageDetector {
  lookup(options?: LanguageDetectorOptions): string | undefined;
  cacheUserLanguage?(lng: string, options?: LanguageDetectorOptions): void;
}
