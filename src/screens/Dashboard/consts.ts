import type { QueryParams } from "../../types";

export const defaultParams: QueryParams = {
  countrycode: "US",
  distance: 20,
  maxresults: 20,
  verbose: false,
  // TODO: use env variable
  key: "2e6d6bc6-fa40-49e0-a4e7-54cfb0be7abd",
};
