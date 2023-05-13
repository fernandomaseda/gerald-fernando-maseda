import {
  createDrawerNavigator,
  useDrawerProgress,
  useDrawerStatus,
} from "@react-navigation/drawer";
import React, { ReactNode, useEffect } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import { Drawer } from "@components/Drawer";
import Animated, { EasingNode } from "react-native-reanimated";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  PanGestureHandler,
  GestureEvent,
  PanGestureHandlerEventPayload,
  State,
} from "react-native-gesture-handler";

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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.slate[900],
      }}
    >
      <Navigator
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
          swipeEdgeWidth: 60,
          swipeEnabled: true,
          swipeMinDistance: 0,
        }}
        drawerContent={DrawerComponent}
      >
        {children}
      </Navigator>
    </View>
  );
};

export const DrawerScreen = Screen;
