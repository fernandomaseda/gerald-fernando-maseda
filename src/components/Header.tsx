import { View, TouchableOpacity, Text } from "react-native";
import { FC, useState } from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import clsx from "clsx";

interface HeaderProps {
  title: string;
  classNames?: string;
}

export const Header: FC<HeaderProps> = ({ title, classNames }) => {
  const { dispatch } = useNavigation();

  return (
    <>
      <View className={clsx("w-full flex-row items-center", classNames)}>
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
