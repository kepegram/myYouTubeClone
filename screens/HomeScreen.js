import {
  Text,
  View,
  Image,
  ScrollView,
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
    <ScrollView style={styles.homeContainer}>
      <SafeAreaView style={styles.homeHeaderButtonsContainer}>
        <View style={styles.homeHeaderLogoContainer}>
          <Image
            style={styles.homeHeaderLogo}
            source={require("../assets/youtube-logo.png")}
          />
          <Text style={styles.homeHeaderText}>YouTube</Text>
        </View>
        <View style={styles.homeHeaderButtons}>
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Text>&nbsp;&nbsp;&nbsp;</Text>
        </View>
      </SafeAreaView>

      {/* Categories */}

      <ScrollView
        style={styles.homeCategoryContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeCategories}>
          <ScrollView
            style={styles.homeCategoriesScrollView}
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

        {/* Shorts */}

        <View style={styles.homeShortsContainer}>
          <View style={styles.homeShortsFormatting}>
            <Image
              source={require("../assets/youtube-shorts-logo-E2BF31FE28-seeklogo.com.png")}
              style={styles.homeShortsImages}
            />
            <Text style={styles.homeShortsText}>Shorts</Text>
          </View>
          <View style={styles.homeShortsMap}>
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
    </ScrollView>
  );
}
