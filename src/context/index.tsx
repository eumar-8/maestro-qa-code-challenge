import { NavigationContainer } from "@react-navigation/native";
import type { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface IAppProviders {
  children: ReactNode;
}
export const AppProviders = ({ children }: IAppProviders) => (
  <SafeAreaProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </SafeAreaProvider>
);
