import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import {
  subVideos,
  subsCategories,
  users,
  suggestedVideos,
  subShorts,
} from "../constants/consts";
import { styles } from "../theme/styles";
import VideoCard from "../components/videoCard";
import ShortsCard from "../components/shortsCard";
import * as Icon from "react-native-feather";

const SubsScreen = () => {
  const [selectedUser, setSelectedUser] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 30,
        }}
      >
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
      <View style={styles.header}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {users.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => handleUserSelect(user.id)}
              style={styles.userItem}
            >
              <Image source={user.avatar} style={styles.userPhoto} />
              <Text
                style={
                  selectedUser === user.id
                    ? styles.selectedUserName
                    : styles.userName
                }
              >
                {user.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View>
          <ScrollView
            style={{ padding: 5 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {subsCategories.map((category, index) => {
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
                    marginRight: 8,
                    height: 30,
                  }}
                >
                  <Text style={{ color: textClass }}>{category}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <VideoCard video={suggestedVideos[1]} />

      {/* Shorts */}

      <View style={styles.homeShortsContainer}>
        <View style={styles.homeShortsFormatting}>
          <Image
            source={require("../assets/youtube-shorts-logo-E2BF31FE28-seeklogo.com.png")}
            style={styles.homeShortsImages}
          />
          <Text style={styles.homeShortsText}>Shorts</Text>
        </View>
        <ScrollView horizontal style={{ flexDirection: "row" }}>
          {subShorts.map((item, index) => (
            <ShortsCard item={item} key={index} />
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {subVideos.map((video, index) => (
          <VideoCard video={video} key={index} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default SubsScreen;
