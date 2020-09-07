import { Services } from "i18next";

import CompositeLanguageDetector, {
  CompositeLanguageDetectorOptions,
} from "./CompositeLanguageDetector";

const options: CompositeLanguageDetectorOptions = {
  order: ["expo"],
};

export default class NativeLanguageDetector extends CompositeLanguageDetector {
  public constructor(services: Services) {
    super(services, options);
  }
}
