export interface LanguageUtils {
  formatLanguageCode(lng: string): string;
  isWhitelisted(lng: string): boolean;
}
