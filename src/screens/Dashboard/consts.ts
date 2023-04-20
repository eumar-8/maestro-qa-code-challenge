import type { QueryParams } from "../../types";

export const defaultParams: QueryParams = {
  countrycode: "US",
  distance: 20,
  maxresults: 20,
  verbose: false,
  // TODO: use env variable
  key: "open charge map api key goes here",
};
