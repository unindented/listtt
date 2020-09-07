import { Services } from "i18next";

import CompositeLanguageDetector, {
  CompositeLanguageDetectorOptions,
} from "./CompositeLanguageDetector";

const options: CompositeLanguageDetectorOptions = {
  order: ["queryString", "localStorage", "expo", "htmlTag"],
  lookupQueryString: "lng",
  lookupLocalStorage: "lng",
};

export default class WebLanguageDetector extends CompositeLanguageDetector {
  public constructor(services: Services) {
    super(services, options);
  }
}
