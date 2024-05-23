import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Platform, StyleSheet, View, FlatList } from "react-native";
import { Text } from "~/components/ui/text";
import { projectsRoutes } from "../../../lib/project-routes";
import { Link } from "expo-router";
import { FlashList } from "@shopify/flash-list";

export default function HomePage() {
  const renderItem = ({ item, index }: any) => (
    <Link
      href={`/${item.id}`}
      className="flex-1 p-2 border-b-[0.5px] border-b-border justify-between items-center"
    >
      <View
        className={`flex-row flex-1 items-center justify-between p-2 ${
          Platform.OS === "web" ? "w-full" : "w-[calc(100vw)]"
        }`}
      >
        <View className="flex-1">
          <Text className="font-bold text-[16px]">
            {`${index + 1}. ${item.title}`}
          </Text>
          <Text className="text-[12px] font-thin">{item.description}</Text>
        </View>
        <View className="px-6">
          <FontAwesome name="chevron-right" size={16} color="#666666" />
        </View>
      </View>
    </Link>
  );

  return (
    <View className="flex-1">
      <View>
        <FlashList
          data={projectsRoutes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
