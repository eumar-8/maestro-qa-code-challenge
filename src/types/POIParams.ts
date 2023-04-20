export type QueryParams = {
  /**Filter results to a given bounding box. specify top left and bottom right box corners as: (lat,lng),(lat2,lng2) */
  boundingBox?: Array<number>;
  /**Set to true to get a property names in camelCase format. Default false */
  camelcase?: boolean;
  /**Exact match on a given OCM POI ID (comma separated list) */
  chargepointid?: string;
  /**String to identify your client application. Optional but recommended to distinguish your client from other bots/crawlers */
  client?: string;
  /**Set to true to remove reference data objects from output (just returns IDs for common reference data such as DataProvider etc). */
  compact?: boolean;
  /** Exact match on a given connection type id (comma separated list). Default false */
  connectiontypeid?: Array<number>;
  /** 2-character ISO Country code to filter to one specific country */
  countrycode?: string;
  /**Exact match on a given numeric country id (comma separated list) */
  countryid?: Array<string>;
  /**Exact match on a given data provider id id (comma separated list). */
  dataproviderid?: Array<number>;
  /**Optionally filter results by a max distance from the given latitude/longitude */
  distance?: number;
  /** miles or km distance unit. Default miles */
  distanceunit?: string;
  /**If true, user comments and media items will be include in result set. Default false */
  includecomments?: boolean;
  /** API Key supplied as query string parameter */
  key: string;
  /**Latitude for distance calculation and filtering. */
  latitude?: number;
  /** Longitude for distance calculation and filtering */
  longitude?: number;
  /**Limit on max number of results returned. Default 100 */
  maxresults?: number;
  /**Use opendata=true for only OCM provided ("Open") data. */
  opendata?: boolean;
  /**Exact match on a given EVSE operator id (comma separated list) */
  operatorid?: Array<number>;
  /**Optional output format json,geojson,xml,csv, JSON is the default and recommended as the highest fidelity. Default json*/
  output?: string;
  /**Filter results within a given Polygon. Specify an encoded polyline for the polygon shape. Polygon will be automatically closed from the last point to the first point. */
  polygon?: string;
  /**Filter results along an encoded polyline, use with distance param to increase search distance along line. Polyline is expanded into a polygon to cover the search distance. */
  polyline?: string;
  /**Exact match on a given status type id (comma separated list) */
  statustypeid?: Array<number>;
  /**Exact match on a given usage type id (comma separated list). Example 1,2,3 */
  usagetypeid?: Array<number>;
  /**Set to false to get a smaller result set with null items removed. Default true */
  verbose?: boolean;
};
