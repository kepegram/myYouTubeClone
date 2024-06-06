import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { useState } from "react";
import {
  categories,
  shorts,
  videos,
  suggestedVideos,
} from "../constants/consts";
import ShortsCard from "../components/shortsCard";
import VideoCard from "../components/videoCard";
import { styles } from "../theme/styles";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <View style={styles.homeContainer}>
      <SafeAreaView style={styles.homeHeaderButtonsContainer}>
        <View style={styles.homeHeaderLogoContainer}>
          <Image
            style={styles.homeHeaderLogo}
            source={require("../assets/youtube-logo.png")}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            YouTube
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={{ flex: 1, marginTop: 5 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingLeft: 10 }}>
          <ScrollView
            style={{ padding: 5, paddingBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? "black" : "white";
              return (
                <Pressable
                  onPress={() => setActiveCategory(category)}
                  key={index}
                  style={{
                    flexWrap: "wrap",
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                    borderRadius: 5,
                    padding: 5,
                    marginRight: 5,
                    height: 25,
                  }}
                >
                  <Text style={{ color: textClass }}>{category}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <VideoCard video={suggestedVideos[0]} />

        <View
          style={{
            padding: 5,
            paddingLeft: 15,
            maxHeight: 600,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/youtube-shorts-logo-E2BF31FE28-seeklogo.com.png")}
              style={{ height: 25, width: 20 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                paddingLeft: 5,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Shorts
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            {shorts.map((item, index) => (
              <ShortsCard item={item} key={index} />
            ))}
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
