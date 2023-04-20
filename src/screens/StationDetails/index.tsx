import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { SafeScreenView } from "../../components/common/SafeScreenView";
import type {
  NavigationRootStackType,
  RouteParams,
} from "../../navigators/types";

export const StationDetailsScreen = () => {
  const navigation = useNavigation<NavigationRootStackType>();
  const {
    params: { poi },
  } = useRoute<RouteProp<RouteParams, "StationDetails">>();

  const goBack = () => {
    navigation.goBack();
  };

  const startCharging = async () => {
    /* TODO: could show a loading state... disable button while request in flight
    add a spinner. 
    The following hits dead endpoint, for now just console logging */
    try {
      Alert.alert("Started charging!", undefined, [{ text: "Dismiss" }])
      
      const { data } = await axios.post(
        "https://example.ev.energy/chargingsession",
        {
          user: 1,
          car_id: 1,
          charger_id: poi.ID,
        }
      );
      if (data) {
        // TODO: handle success in UI
        console.log("success");
      }
    } catch (err) {
      // TODO: handle errors, could send off to Sentry / monitoring tool
      // would also surface the existence of an error to UI
      console.log("failure - endpoint doesn't exist yet", err);
    }
  };

  return (
    <SafeScreenView style={styles.wrapper}>
      <Pressable
        accessibilityLabel="Go Back"
        accessibilityHint="Navigates back to the dashboard"
        onPress={goBack}
        style={styles.goBack}
      >
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={styles.infoGroup}>
        <Text style={styles.headerText}>{poi.AddressInfo.Title}</Text>
        <Text>OCM-{poi.ID}</Text>
      </View>
      <View style={styles.infoGroup}>
        <Text style={styles.rowTitle}>Location Details:</Text>
        <Text>{poi.AddressInfo.AddressLine1}</Text>
        <Text>
          {poi.AddressInfo.Town}, {poi.AddressInfo.StateOrProvince}{" "}
          {poi.AddressInfo.Postcode}
        </Text>
        <Text>
          {poi.AddressInfo.Latitude}, {poi.AddressInfo.Longitude}
        </Text>
      </View>
      <View style={styles.infoGroup}>
        <Text style={styles.rowTitle}>Equipment Details:</Text>
        <Text>Number of stations/bays: {poi.NumberOfPoints || "unknown"}</Text>
      </View>
      <View style={styles.infoGroup}>
        <Text style={styles.rowTitle}>Usage Restrictions:</Text>
        <Text>Usage: {poi.UsageType?.Title || "unknown"}</Text>
        <Text>Cost: {poi.UsageCost || "unknown"}</Text>
      </View>
      <View style={styles.infoGroup}>
        <Text style={styles.rowTitle}>Additional Information:</Text>
        <Text>Data Provider: {poi.DataProvider?.Title || "unknown"}</Text>
      </View>
      <Pressable
        accessible={true}
        accessibilityLabel="Start charging your vehicle"
        style={({ pressed }: { pressed: boolean }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.chargeButton,
        ]}
        onPress={startCharging}
      >
        <Text style={styles.buttonText}>START CHARGING</Text>
      </Pressable>
    </SafeScreenView>
  );
};

const styles = StyleSheet.create({
  buttonText: { color: "white" },
  chargeButton: {
    marginTop: 40,
    height: 48,
    padding: 12,
    backgroundColor: "blue",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  goBack: { paddingRight: 10, paddingVertical: 10 },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
  },
  infoGroup: {
    marginVertical: 8,
  },
  rowTitle: { fontWeight: "bold", fontSize: 18 },
  wrapper: { paddingHorizontal: 12 },
});
