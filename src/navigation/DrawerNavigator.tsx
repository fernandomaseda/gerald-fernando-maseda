import {
  createDrawerNavigator,
  useDrawerProgress,
  useDrawerStatus,
} from "@react-navigation/drawer";
import React, { ReactNode, useEffect } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import { Drawer } from "@components/Drawer";
import Animated, {
  EasingNode,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  PanGestureHandler,
  GestureEvent,
  PanGestureHandlerEventPayload,
  State,
} from "react-native-gesture-handler";
import { useAppContext } from "@store/Context";

const { Navigator, Screen } = createDrawerNavigator<{
  [key: string]: any;
}>();

export const DrawerNavigator = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const DrawerComponent = (props: any) => {
    return <Drawer {...props} />;
  };

  const navigation = useNavigation();

  const { progressRef } = useAppContext();
  // const handleGestureEvent = (
  //   event: GestureEvent<PanGestureHandlerEventPayload>
  // ): void => {
  //   if (event.nativeEvent.translationX > 0) {
  //     dispatch(DrawerActions.openDrawer());
  //   } else {
  //     dispatch(DrawerActions.closeDrawer());
  //   }
  // };

  // const handleGestureEvent = Animated.event(
  //   [{ nativeEvent: { translationX: progress } }],
  //   { useNativeDriver: true }
  // );

  // const handleGestureEvent = (
  //   event: GestureEvent<PanGestureHandlerEventPayload>
  // ) => {
  //   const translationX = event.nativeEvent.translationX;
  //   const newProgress = translationX / 150;
  //   setProgress(new Animated.Value(newProgress));
  // };

  // const handleHandlerStateChange = (
  //   event: GestureEvent<PanGestureHandlerEventPayload>
  // ) => {
  //   if (
  //     event.nativeEvent.state === State.END ||
  //     State.CANCELLED ||
  //     State.FAILED
  //   ) {
  //     const translationX = event.nativeEvent.translationX;
  //     if (translationX > 150 / 2) {
  //       Animated.timing(progress as any, {
  //         toValue: new Animated.Value(1),
  //         duration: 400,
  //         easing: EasingNode.out(EasingNode.cubic) as any,
  //       }).start();
  //     } else {
  //       Animated.timing(progress as any, {
  //         toValue: new Animated.Value(0),
  //         duration: 400,
  //         easing: EasingNode.out(EasingNode.cubic) as any,
  //       }).start();
  //     }
  //   }
  // };

  const animatedDrawerPerentStyle = useAnimatedStyle((): any => {
    return {
      transform: [
        {
          translateY: interpolate(
            progressRef.value,
            [0, 1],
            [0, 50],
            Animated.Extrapolate.CLAMP
          ),
        },
      ],
      borderTopLeftRadius: interpolate(
        progressRef.value,
        [0, 1],
        [1, 24],
        Animated.Extrapolate.CLAMP
      ),
      borderTopRightRadius: interpolate(
        progressRef.value,
        [0, 1],
        [1, 24],
        Animated.Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      style={[animatedDrawerPerentStyle]}
      className="flex-1 bg-slate-900"
    >
      <Navigator
        id="LeftDrawer"
        screenOptions={{
          drawerType: "back",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "50%",
            paddingRight: 10,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
          // gestureHandlerProps: {
          //   onGestureEvent: handleGestureEvent,
          //   onHandlerStateChange: handleHandlerStateChange,
          // },
          swipeEdgeWidth: 80,
          swipeEnabled: true,
          swipeMinDistance: 0,
        }}
        drawerContent={DrawerComponent}
      >
        {children}
      </Navigator>
    </Animated.View>
  );
};

export const DrawerScreen = Screen;
