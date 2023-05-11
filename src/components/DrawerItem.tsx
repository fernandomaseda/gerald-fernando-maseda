import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FC } from "react";
import clsx from "clsx";

export type DrawerItemProps = {
  label: string;
  isSelected?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export const DrawerItem: FC<DrawerItemProps> = ({
  label,
  isSelected,
  onPress,
}) => (
  <TouchableOpacity
    className={clsx(
      "flex flex-row py-1 width-[110px] items-center pl-6 mb-5 rounded-lg",
      {
        "bg-red-500/20": isSelected,
      }
    )}
    onPress={onPress}
  >
    <Text
      className={clsx("text-white text-base", {
        "text-red-500/70": isSelected,
      })}
    >
      {label}
    </Text>
  </TouchableOpacity>
);
