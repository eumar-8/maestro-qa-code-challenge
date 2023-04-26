import { OpenChargeMapPoiData } from "../../../hooks/usePoiFetch/types";
import MapView, { Marker } from "react-native-maps";
import { LocationObjectCoords } from "expo-location";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationRootStackType } from "../../../navigators/types";
import { ExtendedPOIDetails } from "../../../types";
import { useCallback } from "react";

const POIMarker = ({ poi }: { poi: ExtendedPOIDetails }) => {
  const navigation = useNavigation<NavigationRootStackType>();

  const onPress = useCallback(() => {
    navigation.navigate("StationDetails", { poi })
  }, [navigation, poi])
  
  return (
    <Marker
      onPress={onPress}
      pinColor="pink"
      coordinate={{
        latitude: poi.AddressInfo.Latitude,
        longitude: poi.AddressInfo.Longitude,
      }}
    />
  );
};

export const POIMap = ({
  pois,
  location,
}: {
  pois: OpenChargeMapPoiData;
  location: LocationObjectCoords;
}) => {
  return (
    <MapView
      style={styles.container}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      {pois.map((poi) => {
        return <POIMarker key={poi.ID} poi={poi} />;
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
