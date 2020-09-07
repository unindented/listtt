import { LanguageDetector } from "./types";

const detector: LanguageDetector = {
  lookup: () => document.documentElement.getAttribute("lang") ?? undefined,
};

export default detector;
