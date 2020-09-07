import { parse } from "querystring";

import { LanguageDetector, LanguageDetectorOptions } from "./types";

type RequiredLanguageDetectorOptions = Required<
  Pick<LanguageDetectorOptions, "lookupQueryString">
>;

const defaultOptions: RequiredLanguageDetectorOptions = {
  lookupQueryString: "lng",
};

const detector: LanguageDetector = {
  lookup: (options: RequiredLanguageDetectorOptions = defaultOptions) => {
    const parsedQuery = parse(window.location.search.substring(1));
    const lng = parsedQuery[options.lookupQueryString];
    return typeof lng === "object" ? lng[0] : lng;
  },
};

export default detector;
