import { useCallback, useState, useEffect } from "react";
import { Text, View, ScrollView, Alert, BackHandler } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Checkbox } from "@components/Checkbox";

export function SignOut() {
  const [checked, setChecked] = useState<boolean>(false);
  const navigator = useNavigation();

  useEffect(() => {
    if (checked) {
      setTimeout(() => {
        setChecked(false);
        navigator.navigate("Drawer", { screen: "Start" });
        BackHandler.exitApp();
      }, 100);
    }
  }, [checked]);

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <Text className="text-2xl font-bold w-full text-center mt-10">
        Sign Out
      </Text>

      <View className="flex flex-col items-center mt-10">
        <Checkbox
          title="Check I you want to exit app"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>
    </View>
  );
}
