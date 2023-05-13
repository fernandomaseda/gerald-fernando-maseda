import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Animated, {
  EasingNode,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import clsx from "clsx";
import { ReactElement, useEffect } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import colors from "tailwindcss/colors";
import { PanGestureHandler } from "react-native-gesture-handler";

const { Navigator, Screen } = createStackNavigator<{
  [key: string]: any;
}>();

export const EmbeddedStack = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const progress: any = useDrawerProgress();

  // const { progress, setProgress } = useDrawerContext();

  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 1],
  //   extrapolate: Animated.Extrapolate.CLAMP,
  // });

  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 230],
  //   extrapolate: Animated.Extrapolate.CLAMP,
  // });

  // const translateY = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 40],
  //   extrapolate: Animated.Extrapolate.CLAMP,
  // });

  // const rotate = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, -0.1],
  //   extrapolate: Animated.Extrapolate.CLAMP,
  // });

  // const animatedStyle = {
  //   transform: [{ scale, translateX, translateY, rotate }],
  // };

  const animatedStyle = useAnimatedStyle((): any => {
    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, 40],
            Animated.Extrapolate.CLAMP
          ),
        },
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [0, 50],
            Animated.Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [1, 1],
            Animated.Extrapolate.CLAMP
          ),
        },
        {
          rotate: `${interpolate(
            progress.value,
            [0, 1],
            [0, -5],
            Animated.Extrapolate.CLAMP
          )}deg`,
        },
      ],
      borderTopLeftRadius: interpolate(
        progress.value,
        [0, 1],
        [1, 24],
        Animated.Extrapolate.CLAMP
      ),
    };
  });
  return (
    <Animated.View
      className="flex-1 bg-white overflow-hidden"
      style={[animatedStyle]}
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
