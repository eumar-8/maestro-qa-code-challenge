import type { QueryParams } from "../../types";

export const defaultParams: QueryParams = {
  countrycode: "US",
  distance: 20,
  maxresults: 20,
  verbose: false,
  // TODO: use env variable
  key: "08a9c420-6100-4f3f-be7f-98b41730c60e",
};
