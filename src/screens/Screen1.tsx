import { useCallback, useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BackButton } from "@components/BackButton";

export function Screen1() {
  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <View className="flex flex-row items-center">
        <BackButton />
        <Text className="text-2xl font-bold ml-5">Screen 1</Text>
      </View>
    </View>
  );
}
