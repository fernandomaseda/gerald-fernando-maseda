import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";
import { ReactElement } from "react";

const { Navigator, Screen } = createBottomTabNavigator<{
  [key: string]: undefined;
}>();

const iconsName: { [key: string]: string } = {
  Home: "home",
  Contact: "inbox",
};

export const TabNavigator = ({
  children,
}: {
  children: ReactElement[];
}): JSX.Element => (
  <Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ color, size }) => (
        <Feather
          name={iconsName[route.name] as any}
          size={size}
          color={color}
        />
      ),
      activeTintColor: colors.blue[500],
      inactiveTintColor: colors.gray[400],
      headerShown: false,
    })}
  >
    {children}
  </Navigator>
);

export const TabScreen = Screen;
