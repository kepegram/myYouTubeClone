import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function CreateScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          paddingTop: 20,
          borderWidth: 8,
          borderRadius: 10,
          borderBottomColor: "#4C4C4C",
        }}
      ></View>
      <View style={{ position: "absolute" }}>
        <TouchableOpacity
          style={{ paddingTop: 43, paddingLeft: 5 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon.X stroke={"white"} strokeWidth={1.2} width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon.Music stroke={"white"} />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            paddingLeft: 10,
          }}
        >
          Add sound
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          paddingTop: Dimensions.get("screen").height - 450,
          paddingLeft: Dimensions.get("screen").width - 40,
        }}
      >
        <Icon.RefreshCcw stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Clock stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Tool stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Settings stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.User stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.ArrowDownCircle stroke={"white"} strokeWidth={1.2} />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
      </View>
      <View
        style={{
          position: "absolute",
          paddingTop: 40,
          paddingLeft: Dimensions.get("screen").width - 45,
        }}
      >
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
            width: 40,
            height: 40,
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          underlayColor="#ccc"
          onPress={() => alert("Yaay!")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}> 60s </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 450,
        }}
      >
        <View
          style={{
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
            width: 70,
            height: 70,
            backgroundColor: "red",
            borderColor: "white",
            borderWidth: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: Dimensions.get("screen").width - 257,
          paddingTop: 40,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "grey", fontWeight: "bold" }}>Video</Text>
        </TouchableOpacity>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <TouchableOpacity
          style={{ backgroundColor: "#4C4C4C", borderRadius: 20 }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Short</Text>
        </TouchableOpacity>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <TouchableOpacity>
          <Text style={{ color: "grey", fontWeight: "bold" }}>Live</Text>
        </TouchableOpacity>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <TouchableOpacity>
          <Text style={{ color: "grey", fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
