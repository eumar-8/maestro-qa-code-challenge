import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import type { IHeader } from "./types";
import { useCallback, useState } from "react";
import { NumberInputRow } from "./NumberInputRow";

export const Header = ({ city, distance, displayMap, distanceUnit, maxResults, onDistanceChange, onDisplayMapChange, onMaxResultsChange, }: IHeader) => {
  const [mutableDistance, setMutableDistance] = useState(distance)
  const [mutableMaxResults, setMutableMaxResults] = useState(maxResults);

  const onDistanceTextChange = useCallback((text: string) => {
    if (isNaN(Number(text))) {
      return
    }

    setMutableDistance(Number(text))
  }, [])

  const onSubmitDistance = useCallback(() => {
    onDistanceChange(mutableDistance)
  }, [mutableDistance])

  const onResultsTextChange = useCallback((text: string) => {
    if (isNaN(Number(text))) {
      return
    }

    setMutableMaxResults(Number(text))
  }, [])

  const onSubmitMaxResults = useCallback(() => {
    onMaxResultsChange(mutableMaxResults)
  }, [mutableMaxResults])

  return (
    <View style={styles.container}>
      <View style={styles.locationWrap}>
        <Text style={styles.locationText}>{city ?? "Loading..."}</Text>
        <FontAwesome name="map-marker" size={24} color="blue" />
        <View style={styles.switchContainer}>
          <Text>List</Text>
          <Switch   testID="Switch" style={styles.switch} value={displayMap} onChange={event => onDisplayMapChange(event.nativeEvent.value)}/>
          <Text>Map</Text>
        </View>
      </View>
      <NumberInputRow prefix="Within" suffix={distanceUnit || "miles"} value={mutableDistance} onValueChange={onDistanceTextChange} onSubmit={onSubmitDistance}/>
      <NumberInputRow  testID="returning-input" prefix="Returning" suffix="results" value={mutableMaxResults} onValueChange={onResultsTextChange} onSubmit={onSubmitMaxResults} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  locationText: { marginRight: 16, fontWeight: "bold", fontSize: 32 },
  locationWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  switchContainer: {flexDirection: 'row', marginHorizontal: 8, alignItems: 'center'},
  switch: { marginHorizontal: 8}
});
