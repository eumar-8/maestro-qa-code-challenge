import { StyleSheet, Text, View } from "react-native";
import { SafeScreenView } from "../../components/common/SafeScreenView";
import { Header } from "./components";
import { usePoiFetch } from "../../hooks/usePoiFetch";
import { defaultParams } from "./consts";
import { useState } from "react";
import { POIList } from "./components/POIList";
import { POIMap } from "./components/POIMap";

export const DashboardScreen = () => {
  const [distance, setDistance] = useState(defaultParams.distance);
  const [maxResults, setMaxResults] = useState(defaultParams.maxresults);
  const [display, setDisplay] = useState<"list" | "map">("list");
  const {
    data: pois,
    error,
    isLoading,
    city,
    coordinates
  } = usePoiFetch({ ...defaultParams, distance, maxresults: maxResults });

  return (
    <SafeScreenView style={styles.wrapper}>
      <Header
        city={city}
        distance={distance}
        displayMap={display === 'map'}
        distanceUnit={defaultParams.distanceunit}
        maxResults={maxResults}
        onDistanceChange={(newValue) => setDistance(newValue)}
        onDisplayMapChange={newValue => setDisplay(newValue ? 'map' : 'list')}
        onMaxResultsChange={(newValue) => setMaxResults(newValue)}
      />
      <View style={{flex: 1}}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {pois.length && coordinates ? (
              display === 'list' ? <POIList pois={pois} /> :<POIMap location={coordinates} pois={pois} />
            ) : (
              <Text>There are currently no stations nearby</Text>
            )}
          </>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </SafeScreenView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    // TODO: Use color from global constants (e.g. colors.red.errorText)
    color: "#fd0000",
  },
  wrapper: { paddingHorizontal: 12, flex: 1 },
});
