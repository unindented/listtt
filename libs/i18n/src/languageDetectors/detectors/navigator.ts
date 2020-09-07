import { LanguageDetector } from "./types";

const detector: LanguageDetector = {
  lookup: () => navigator.language,
};

export default detector;
