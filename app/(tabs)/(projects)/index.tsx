import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Dimensions,
  Platform,
  StyleSheet,
  // Text,
  View,
  FlatList,
} from "react-native";
import { Text } from "~/components/ui/text";
import { projectsRoutes } from "../../../lib/project-routes";
import { Link } from "expo-router";

export default function HomePage() {
  const renderItem = ({ item, index }: any) => (
    <Link
      href={`/${item.id}`}
      className="flex-1 p-2 border-b-[1px] border-b-[#CCCCCC] justify-between items-center"
    >
      <View
        className={`flex-row flex-1 items-center justify-between p-2 ${
          Platform.OS === "web" ? "w-full" : "w-[calc(100vw)]"
        }`}
      >
        <View style={styles.textContainer}>
          <Text style={styles.projectTitle}>
            {`${index + 1}. ${item.title}`}
          </Text>
          <Text style={styles.projectDescription}>{item.description}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="chevron-right" size={16} color="#666666" />
        </View>
      </View>
    </Link>
  );

  return (
    <View className="flex-1">
      <View>
        {/* <Text style={styles.title}>KitchenSink</Text> */}
        {/* <Text style={styles.subtitle}> */}
        {/*   For all the projects of Engineer Codewala. */}
        {/* </Text> */}
        <FlatList
          data={projectsRoutes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 12,
    fontWeight: "thin",
    color: "#666666",
  },
});
