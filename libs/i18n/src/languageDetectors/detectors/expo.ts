import { locale } from "expo-localization";

import { LanguageDetector } from "./types";

const detector: LanguageDetector = {
  lookup: () => locale,
};

export default detector;
