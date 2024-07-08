import { View, Text, Image, Pressable } from "react-native";
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
        <Text style={styles.shortsButtonText}>Dislike</Text>
        <Icon.MessageSquare
          stroke={"white"}
          fill={"white"}
          height="60"
          width="30"
        />
        <Text style={styles.shortsButtonText}>2,102</Text>
        <Icon.Share stroke={"white"} strokeWidth={3} height="60" width="30" />
        <Text style={styles.shortsButtonText}>Share</Text>
      </View>
      <View style={styles.shortsSoundImage}>
        <Image
          source={require("../assets/thumbnails/driver-selfie.jpeg")}
          style={{ height: 40, width: 40 }}
        />
      </View>
      <View style={styles.shortsDescriptionUserImage}>
        <Image
          source={require("../assets/thumbnails/driver-selfie.jpeg")}
          style={{ height: 30, width: 30, borderRadius: 20 }}
        />
      </View>
      <View style={styles.shortsDescriptionUser}>
        <Text style={{ color: "white", fontWeight: "bold" }}>@Don Patron</Text>
      </View>
      <View style={styles.shortsDescriptionSubscribeButton}>
        <Pressable style={styles.shortsSubscribeButtonStyling}>
          <Text style={{ paddingTop: 5 }}>Subscribe</Text>
        </Pressable>
      </View>
      <View style={styles.shortsDescription}>
        <Text style={{ color: "white" }}>Ferrari 458 GT3 Cockpit POV</Text>
      </View>
      <View style={styles.shortsSoundImage}>
        <Icon.Music stroke={"white"} strokeWidth={2} />
        <Text style={styles.shortsSoundText}>Original Sound</Text>
      </View>
    </View>
  );
}
