import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Animated, {
  EasingNode,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  useAnimatedReaction,
} from "react-native-reanimated";
import clsx from "clsx";
import { ReactElement, useLayoutEffect } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import colors from "tailwindcss/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAppContext } from "@store/Context";
const { Navigator, Screen } = createStackNavigator<{
  [key: string]: any;
}>();

export const EmbeddedStack = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const progress: any = useDrawerProgress();
  let { progressRef } = useAppContext();

  // sync progressRef (context) with drawer progress
  const derivedValue = useDerivedValue(() => {
    return progress.value;
  });

  useAnimatedReaction(
    () => {
      return derivedValue.value;
    },
    (value) => {
      progressRef.value = value;
    },
    []
  );

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

  const animatedCardStyle = useAnimatedStyle((): any => {
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
      style={[animatedCardStyle]}
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
