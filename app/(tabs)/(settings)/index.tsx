import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { settingsOptions } from "../../../lib/setting-options.ts";

export default function SettingsPage() {
  const renderSettingItem = ({ item }) => (
    <TouchableOpacity style={styles.settingsItem}>
      <FontAwesome name={item.icon} size={24} color="#333" />
      <Text style={styles.settingsItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        (Platform.OS === "android" || Platform.OS === "ios") && {
          paddingTop: 80,
        },
      ]}
    >
      <View style={styles.main}>
        <Text style={styles.title}>Settings</Text>

        <FlatList
          data={settingsOptions}
          renderItem={renderSettingItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.settingsContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingsItemText: {
    fontSize: 16,
    marginLeft: 16,
  },
});
