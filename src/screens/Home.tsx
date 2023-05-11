import { useCallback, useState } from "react";
import { Text, View, ScrollView, Alert, Button } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { MainLayout } from "@components/MainLayout";
import colors from "tailwindcss/colors";

export function Home() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <Header title="Start" />
      <Text className="text-2xl font-bold w-full text-center mt-10">Home</Text>
      <View className="flex flex-col items-center mt-10">
        <Button
          title="Go to Screen 1"
          color={colors.blue[500]}
          onPress={() => navigation.navigate("Home", { screen: "Screen1" })}
        />
      </View>
      <View className="flex flex-col items-center mt-6">
        <Button
          title="Go to Screen 2"
          color={colors.blue[500]}
          onPress={() => navigation.navigate("Home", { screen: "Screen2" })}
        />
      </View>
    </MainLayout>
  );
}
