import { View, Text, Image, ScrollView, Pressable, Button } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#101010" }}>
      <View
        style={{
          paddingTop: 30,
          paddingLeft: 200,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Icon.Settings stroke="white" strokeWidth={1.2} height="22" />
        <Text>&nbsp;&nbsp;&nbsp;</Text>
      </View>
      <View style={{ paddingLeft: 10, flexDirection: "row" }}>
        <Image
          source={require("../assets/pfps/default-pfp.png")}
          style={{ height: 70, width: 70, borderRadius: 50 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            paddingLeft: 10,
            paddingTop: 15,
          }}
        >
          @John Doe
        </Text>
      </View>
      <View style={{ paddingLeft: 90 }}>
        <Text style={{ color: "grey", bottom: 20 }}>
          @John Doe • View channel &rsaquo;
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 10 }}
      >
        <Pressable
          style={{
            backgroundColor: "#303030",
            height: 30,
            width: 110,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Icon.Users stroke="white" strokeWidth={1.2} height="15" />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 10,
              paddingEnd: 5,
            }}
          >
            Switch Account
          </Text>
        </Pressable>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Pressable
          style={{
            backgroundColor: "#303030",
            height: 30,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Icon.User stroke="white" strokeWidth={1.2} height="15" />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 10,
              paddingEnd: 5,
            }}
          >
            Google Account
          </Text>
        </Pressable>
        <Text>&nbsp;&nbsp;&nbsp;</Text>
        <Pressable
          style={{
            backgroundColor: "#303030",
            height: 30,
            width: 110,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Icon.Cpu stroke="white" strokeWidth={1.2} height="15" />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 10,
              paddingStart: 10,
              paddingEnd: 10,
            }}
          >
            Turn on Incognito
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
