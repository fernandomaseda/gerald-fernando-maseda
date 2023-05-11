import { useCallback, useState, useEffect } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ProgressBar } from "@components/ProgressBar";

export function Contact() {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (state === 100) return;
      setState((prev) => {
        const calc = prev + Math.floor(Math.random() * 30);
        if (calc > 100) {
          return 100;
        } else {
          return calc;
        }
      });
    }, 2000);
  }, [state]);

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <Text className="text-2xl font-bold w-full text-center mt-10">
        Contact
      </Text>
      <View className="flex flex-col items-center mt-10">
        <ProgressBar progress={state} />
        <Text className="text-sm w-full text-center mt-2">
          Loading contacts...
        </Text>
      </View>
    </View>
  );
}
