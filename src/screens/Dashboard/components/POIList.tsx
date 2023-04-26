import { FlatList } from "react-native";
import { POICard } from "../../../components/POICard";
import type { ExtendedPOIDetails } from "../../../types";
import type { OpenChargeMapPoiData } from "../../../hooks/usePoiFetch/types";

export const POIList = ({ pois }: { pois: OpenChargeMapPoiData }) => (
  <FlatList
    data={pois}
    keyExtractor={(item) => String(item.ID)}
    renderItem={({ item }: { item: ExtendedPOIDetails }) => (
      <POICard key={item.ID} poi={item} />
    )}
  />
);
