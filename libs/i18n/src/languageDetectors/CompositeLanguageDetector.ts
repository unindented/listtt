import { LanguageDetectorModule, Services } from "i18next";

import * as detectors from "./detectors";
import { LanguageDetectorOptions } from "./detectors/types";
import { LanguageUtils } from "./types";

export interface CompositeLanguageDetectorOptions
  extends LanguageDetectorOptions {
  readonly order: (keyof typeof detectors)[];
}

export default class CompositeLanguageDetector
  implements LanguageDetectorModule {
  public static readonly type = "languageDetector";
  public readonly type = "languageDetector";

  private services!: Services;
  private options!: CompositeLanguageDetectorOptions;

  public constructor(
    services: Services,
    options: Partial<CompositeLanguageDetectorOptions> = {}
  ) {
    this.init(services, options);
  }

  public init(
    services: Services,
    options: Partial<CompositeLanguageDetectorOptions> = {}
  ): void {
    this.services = services;
    this.options = {
      ...this.options,
      ...options,
    };
  }

  public detect(): string | undefined {
    const detected = this.options.order.reduce<string[]>(
      (acc, detectorName) => {
        // eslint-disable-next-line import/namespace
        const detector = detectors[detectorName];
        const value = detector.lookup(this.options);
        return value ? acc.concat(value) : acc;
      },
      []
    );

    const languageUtils = this.services.languageUtils as LanguageUtils;
    const found = detected
      .map((lng) => languageUtils.formatLanguageCode(lng))
      .find((lng) => languageUtils.isWhitelisted(lng));

    return found;
  }

  public cacheUserLanguage(lng: string): void {
    this.options.order.forEach((detectorName) => {
      // eslint-disable-next-line import/namespace
      const detector = detectors[detectorName];
      if (detector.cacheUserLanguage) {
        detector.cacheUserLanguage(lng, this.options);
      }
    });
  }
}
