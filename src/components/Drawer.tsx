import {
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useCallback } from "react";
import { Dimensions, Text, View, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import colors from "tailwindcss/colors";
import { DrawerItem, DrawerItemProps } from "./DrawerItem";

const useDrawerList = (): DrawerItemProps[][] => {
  const { navigate } = useNavigation();
  return [
    [
      {
        label: "Start",
        onPress: () => navigate("Drawer", { screen: "Start" }),
      },
      {
        label: "Your Cart",
        onPress: () => navigate("Drawer", { screen: "Your Cart" }),
      },
      { label: "Favourite" },
      { label: "Your Orders" },
    ],
    [
      {
        label: "Sign Out",
        onPress: () => navigate("Sign Out"),
      },
    ],
  ];
};

export const Drawer = (): JSX.Element => {
  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);

  const drawerList = useDrawerList();

  const activeScreenName =
    (
      navigationState.routes[navigationState.index].params as {
        [k: string]: string;
      }
    )?.screen ?? "Start";

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        transform: [{ translateY: 30 }],
      }}
      scrollEnabled={false}
    >
      <Animated.View className="flex-1 pl-6">
        <StatusBar barStyle="dark-content" />
        <Text className="text-2xl font-bold py-6 text-white w-full text-center">
          Fernando Maseda
        </Text>

        <View className="flex-1 mt-4">
          {drawerList.map((item, index) => {
            return (
              <View key={index}>
                {item.map((subItem, subIndex) => {
                  return (
                    <DrawerItem
                      key={subIndex}
                      label={subItem.label}
                      isSelected={activeScreenName === subItem.label}
                      onPress={subItem.onPress}
                    />
                  );
                })}
                {index !== drawerList.length - 1 && (
                  <View className="h-[1px] bg-gray-700 my-3 ml-3" />
                )}
              </View>
            );
          })}
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};
