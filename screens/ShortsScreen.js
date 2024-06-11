import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { styles } from "../theme/styles";

export default function ShortsScreen() {
  return (
    <View>
      <Image
        source={require("../assets/thumbnails/pov-short.jpeg")}
        style={styles.shortsImage}
      />
      <View style={styles.shortsHeaderContainer}>
        <Icon.Search
          stroke={"white"}
          strokeWidth={3}
          paddingLeft={600}
          paddingTop={30}
        />
        <Icon.MoreVertical
          stroke={"white"}
          strokeWidth={3}
          paddingLeft={410}
          paddingTop={30}
        />
      </View>
      <View style={styles.shortsButtonsContainer}>
        <Icon.ThumbsUp stroke={"white"} fill={"white"} height="60" width="30" />
        <Text style={{ color: "white", fontWeight: "bold" }}>121K</Text>
        <Icon.ThumbsDown
          stroke={"white"}
          fill={"white"}
          height="60"
          width="30"
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 10 }}>
          Dislike
        </Text>
        <Icon.MessageSquare
          stroke={"white"}
          fill={"white"}
          height="60"
          width="30"
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
          2,102
        </Text>
        <Icon.Share stroke={"white"} strokeWidth={3} height="60" width="30" />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
          Share
        </Text>
      </View>
      <View style={{ position: "absolute", paddingLeft: 330, paddingTop: 560 }}>
        <Image
          source={require("../assets/thumbnails/driver-selfie.jpeg")}
          style={{ height: 40, width: 40 }}
        />
      </View>
      <View style={{ position: "absolute", paddingTop: 495 }}>
        <Image
          source={require("../assets/thumbnails/driver-selfie.jpeg")}
          style={{ height: 30, width: 30, borderRadius: 20 }}
        />
      </View>
      <View style={{ position: "absolute", paddingTop: 500 }}>
        <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 40 }}>
          @Don Patron
        </Text>
      </View>
      <View style={{ position: "absolute", paddingTop: 495, paddingLeft: 140 }}>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 30,
            width: 90,
            alignItems: "center",
          }}
        >
          <Text style={{ paddingTop: 5 }}>Subscribe</Text>
        </Pressable>
      </View>
      <View style={{ position: "absolute", paddingTop: 545, paddingLeft: 10 }}>
        <Text style={{ color: "white" }}>Ferrari 458 GT3 Cockpit POV</Text>
      </View>
      <View
        style={{
          position: "absolute",
          paddingTop: 575,
          paddingLeft: 10,
          flexDirection: "row",
        }}
      >
        <Icon.Music stroke={"white"} strokeWidth={2} />
        <Text style={{ paddingTop: 3, paddingLeft: 10, color: "white" }}>
          Original Sound
        </Text>
      </View>
    </View>
  );
}
