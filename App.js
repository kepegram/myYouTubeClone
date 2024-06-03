import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

export default function App() {
  return (
    <View style={{ backgroundColor: "#222222", flex: 1 }}>
      <SafeAreaView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", paddingLeft: 5 }}
        >
          <Image
            source={require("./assets/youtube-logo.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            YouTube
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Image
            source={require("./assets/default-pfp.png")}
            style={{ height: 25, width: 25, borderRadius: 20 }}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}
