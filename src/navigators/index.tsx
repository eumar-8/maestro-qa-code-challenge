import { createStackNavigator } from "@react-navigation/stack";

import { DashboardScreen, StationDetailsScreen } from "../screens";
import type { RootStackParamList } from "./types";

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen name="Dashboard" component={DashboardScreen} />
    <RootStack.Screen name="StationDetails" component={StationDetailsScreen} />
  </RootStack.Navigator>
);
