import { View, TouchableOpacity, Text } from "react-native";
import { FC, useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const { dispatch } = useNavigation();

  return (
    <>
      <View className="w-full flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => dispatch(DrawerActions.toggleDrawer())}
        >
          <Feather name="menu" color={colors.gray[300]} size={22} />
        </TouchableOpacity>

        <Text className="text-gray-400 ml-6 font-regular text-base tracking-[4] uppercase">
          {title}
        </Text>
      </View>
    </>
  );
};
