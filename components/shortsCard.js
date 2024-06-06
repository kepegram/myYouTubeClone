import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function ShortsCard({ item }) {
  return (
    <View className="relative h-64 w-40 mr-5 mb-5 flex justify-between">
      <Image
        source={item.image}
        className="h-full w-full rounded-xl absolute"
      />
      <View className="flex-row justify-end pt-3 pr-1">
        <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height="20" />
      </View>
      <View className="p-2">
        <Text className="text-white font-bold shadow-lg text-lg">
          {item.title}
        </Text>
      </View>
    </View>
  );
}
