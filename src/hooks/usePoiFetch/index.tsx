import axios from "axios";
import { useEffect, useState } from "react";

import { baseUrl } from "./consts";
import type { OpenChargeMapPoiData } from "./types";
import type { QueryParams } from "../../types";
import { LocationObjectCoords } from "expo-location";
import { useLocation } from "../useLocation";

export const usePoiFetch = (params: QueryParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<OpenChargeMapPoiData>([]);

  const { address, coordinates, error: locationError} = useLocation()

  const fetchPois = async (params: QueryParams, coords: LocationObjectCoords) => {
    try {
      console.log("fetching pois");
      const { data } = await axios.get<OpenChargeMapPoiData>(baseUrl, {
        params: {
          ...params,
          latitude: coords.latitude,
          longitude: coords.longitude,
          countrycode: address?.isoCountryCode
        }
      });
      if (data) setData(data);
    } catch (errors: any) {
      if (errors?.message?.includes("403"))
        setError("You must provide a valid access key");
      else
        setError("We were unable to process your request, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!coordinates) {
      return
    }

    fetchPois(params, coordinates);
  }, [coordinates, params.distance, params.maxresults]);

  useEffect(() => {
    if (!locationError) {
      return
    }

    setError(locationError)
  }, [locationError])

  return { data, error, isLoading, city: address?.city, coordinates };
};
