import type { QueryParams } from "../../types";

export const defaultParams: QueryParams = {
  countrycode: "US",
  distance: 20,
  maxresults: 20,
  verbose: false,
  // TODO: use env variable
  key: "a2948ffa-6986-47ad-8553-b5d9973bc204",
};
