import type { QueryParams } from "../../../types";
import { LocationGeocodedAddress } from "expo-location";
export interface IHeader {
  city?: string | null;
  /** The actual distance in miles or km */
  distance: QueryParams["distance"];
  /** The type of unit distance is measured in. Either miles or km */
  distanceUnit: QueryParams["distanceunit"];
  displayMap: boolean;
  maxResults: QueryParams['maxresults']
  onDistanceChange: (distance: number | undefined) => void;
  onDisplayMapChange: (newValue: boolean) => void;
  onMaxResultsChange: (results: number | undefined) => void;
}
