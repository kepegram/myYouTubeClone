import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function ShortsCard({ item }) {
  return (
    <View className="relative h-64 w-40 mr-3 flex justify-between">
      <Image
        source={item.image}
        className="h-full w-full rounded-xl absolute"
      />
    </View>
  );
}
