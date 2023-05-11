import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Animated from "react-native-reanimated";
import clsx from "clsx";
import { ReactElement } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import colors from "tailwindcss/colors";

const { Navigator, Screen } = createStackNavigator<{
  [key: string]: undefined;
}>();

export const EmbeddedStack = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const progress: any = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 1],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 5],
    outputRange: [0, 190],
  });

  const translateY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 10],
    outputRange: [0, -1.4],
  });

  const animatedStyle = {
    transform: [{ scale, translateX, translateY, rotate }],
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        ...animatedStyle,
        overflow: "hidden",
      }}
    >
      <Navigator
        screenOptions={{
          headerMode: "screen",
          headerShown: false,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        {children}
      </Navigator>
    </Animated.View>
  );
};
export const EmbeddedScreen = Screen;
