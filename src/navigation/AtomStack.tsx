import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactElement } from "react";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import colors from "tailwindcss/colors";

const { Navigator, Screen } = createStackNavigator<{
  [key: string]: any;
}>();

export const AtomStack = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true,
        gestureResponseDistance: 400,
        cardStyle: {
          backgroundColor: "transparent",
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {children}
    </Navigator>
  );
};

export const AtomScreen = Screen;
