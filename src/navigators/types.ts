import { StackNavigationProp } from "@react-navigation/stack";

import type { ExtendedPOIDetails } from "../types";

export type RootStackParamList = {
  Dashboard: undefined;
  StationDetails: StationDetailsRoute;
};

export type NavigationRootStackType = StackNavigationProp<RootStackParamList>;

export type RouteParams = {
  StationDetails: StationDetailsRoute;
};

type StationDetailsRoute = {
  poi: ExtendedPOIDetails;
};
