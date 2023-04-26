import { useEffect, useState } from "react";

import * as Location from "expo-location";

export const useLocation = () => {
  const [coordinates, setCoordinates] = useState<Location.LocationObjectCoords>()
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>()
  const [error, setError] = useState<string>()

  const reverseGeocodeCoordinates = async (coords: Location.LocationObjectCoords) => {
    try {
      const addresses = await Location.reverseGeocodeAsync(coords)

      if (addresses.length === 0) {
        return;
      }

      setAddress(addresses[0])
    } catch (error) {
      setError(`useLocation error - ${error}`)
    }
  }

  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError("You need to grant location permissions to continue")
        return
      }

      // const loc = await Location.getCurrentPositionAsync()
      const loc = {coords: {latitude: 41.4100152,
        longitude: 2.21383,
        altitude: 123,
        accuracy: 1,altitudeAccuracy:1, heading:1, speed:1}, timestamp: 16254364}
      setCoordinates(loc.coords)
    } catch (error) {
      setError(`useLocation error - ${error}`)
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  useEffect(() => {
    if (!coordinates) {
      return;
    }

    reverseGeocodeCoordinates(coordinates)
  }, [coordinates])

  return { address, coordinates, error}
}