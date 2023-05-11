import { useCallback, useState } from "react";
import { Text, View, ScrollView, Alert, Button } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { Header } from "@components/Header";
import colors from "tailwindcss/colors";
import { MainLayout } from "@components/MainLayout";

export function YourCart() {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <Header title="Your Cart" />
    </MainLayout>
  );
}
