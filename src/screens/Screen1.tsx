import { useCallback, useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BackButton } from "@components/BackButton";
import { MainLayout } from "@components/MainLayout";

export function Screen1() {
  return (
    <MainLayout withHeader={false}>
      <View className="flex flex-row items-center">
        <BackButton />
        <Text className="text-2xl font-bold ml-5">Screen 1</Text>
      </View>
    </MainLayout>
  );
}
