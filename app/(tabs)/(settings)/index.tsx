import React from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import { Text } from "../../../components/ui/text";
import { FontAwesome } from "@expo/vector-icons";
import { settingsOptions } from "../../../lib/setting-options";
import { FlashList } from "@shopify/flash-list";

const SettingsScreen = () => {
  return (
    <View className="flex-1">
      <FlashList
        estimatedItemSize={10}
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center p-4 border-b-[0.5px] border-border">
            <FontAwesome
              name={item.icon}
              size={16}
              color="#666666"
              className="mr-4"
            />
            <Text className="text-[16px]">{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SettingsScreen;
