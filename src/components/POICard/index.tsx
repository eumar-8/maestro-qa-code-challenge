import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import type { IPOICard } from "./types";
import type { NavigationRootStackType } from "../../navigators/types";

export const POICard = ({ poi }: IPOICard) => {
  const navigation = useNavigation<NavigationRootStackType>();
  const navToDetails = () => {
    navigation.navigate("StationDetails", { poi });
  };

  return (
    <View style={styles.cardWrap} key={poi.ID}>
      <View style={styles.information}>
        <Text style={styles.addressTitle}>{poi.AddressInfo.Title}</Text>
        <Text>{poi.AddressInfo.AddressLine1}</Text>
        <Text>
          {poi.AddressInfo.Town}, {poi.AddressInfo.StateOrProvince}{" "}
          {poi.AddressInfo.Postcode}
        </Text>
        {poi.NumberOfPoints && (
          <Text>Number of stations: {poi.NumberOfPoints}</Text>
        )}
        {poi.UsageCost && <Text>Cost: {poi.UsageCost}</Text>}
        {poi.AddressInfo.Distance && (
          <Text>
            Distance: {Math.round(poi.AddressInfo.Distance * 100) / 100}{" "}
            {poi.AddressInfo.DistanceUnit === 2 ? "miles" : "km"}
          </Text>
        )}
      </View>
      <View style={styles.linkToDetails}>
        <Pressable
          onPress={navToDetails}
          accessibilityLabel="See station details"
          accessibilityHint="Get more information about the station and start charging your vehicle"
          style={styles.arrowStyles}
        >
          <FontAwesome name="arrow-right" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressTitle: { fontWeight: "bold" },
  arrowStyles: { paddingLeft: 15, paddingVertical: 15, paddingRight: 5 },
  cardWrap: {
    padding: 16,
    backgroundColor: "pink",
    margin: 8,
    display: "flex",
    flexDirection: "row",
  },
  information: { maxWidth: "80%" },
  linkToDetails: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "20%",
  },
});
