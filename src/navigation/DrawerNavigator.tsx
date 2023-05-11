import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import React, { ReactNode, useRef } from "react";
import { View } from "react-native";
import colors from "tailwindcss/colors";
import { Drawer } from "@components/Drawer";
import Animated from "react-native-reanimated";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  PanGestureHandler,
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

const { Navigator, Screen } = createDrawerNavigator<{
  [key: string]: undefined;
}>();

export const DrawerNavigator = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const DrawerComponent = (props: any) => {
    return <Drawer {...props} />;
  };

  const { dispatch } = useNavigation();

  const navigation = useNavigation();
  const gestureHandler = useRef(null);

  const handleGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ): void => {
    if (event.nativeEvent.translationX > 0) {
      dispatch(DrawerActions.openDrawer());
    } else {
      dispatch(DrawerActions.closeDrawer());
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.slate[900],
      }}
    >
      <Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "50%",
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
          gestureHandlerProps: {
            onGestureEvent: handleGestureEvent,
          },
          swipeEdgeWidth: 50,
          swipeEnabled: true,
          drawerStatusBarAnimation: "slide",
        }}
        drawerContent={DrawerComponent}
        useLegacyImplementation
      >
        {children}
      </Navigator>
    </View>
  );
};

export const DrawerScreen = Screen;
