import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useNavigation,
  useNavigationState,
  DrawerActions,
} from "@react-navigation/native";
import { Dimensions, Text, View, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import colors from "tailwindcss/colors";
import { DrawerItem, DrawerItemProps } from "./DrawerItem";

const useDrawerList = (): DrawerItemProps[][] => {
  const { dispatch, navigate } = useNavigation();
  return [
    [
      {
        label: "Start",
        onPress: () => dispatch(DrawerActions.jumpTo("Start")),
      },
      {
        label: "Your Cart",
        onPress: () => dispatch(DrawerActions.jumpTo("Your Cart")),
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

  const rootStack = navigationState.routes;
  const rootScreen = rootStack[navigationState.index]; // DrawerNavigator
  const drawerState = rootScreen.state;

  //drawer screens || root screens
  const activeScreenName =
    drawerState?.routeNames?.[drawerState?.index ?? 0] || rootScreen.name;

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        transform: [{ translateY: 30 }],
      }}
      scrollEnabled={false}
    >
      <View className="flex-1 pl-6">
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
      </View>
    </DrawerContentScrollView>
  );
};
