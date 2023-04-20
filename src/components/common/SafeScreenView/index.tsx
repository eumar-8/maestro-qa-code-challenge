import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";

interface ISafeScreenViewProps {
  children: ReactNode;
  style?: ViewStyle;
  statusBarStyle?: "auto" | "inverted" | "light" | "dark";
}

export const SafeScreenView = ({
  children,
  style,
  statusBarStyle = "dark",
}: ISafeScreenViewProps) => (
  <SafeAreaView style={style}>
    <>
      {children}
      <StatusBar style={statusBarStyle} />
    </>
  </SafeAreaView>
);
