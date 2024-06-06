import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTab />
    </NavigationContainer>
  );
}
