import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { ReactElement } from "react";

const { Navigator, Screen } = createStackNavigator<{
  [key: string]: undefined;
}>();

export const RootStack = ({
  children,
}: {
  children: ReactElement[];
}): JSX.Element => (
  <Navigator
    initialRouteName="Drawer"
    screenOptions={() => {
      return {
        mode: "modal",
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      };
    }}
  >
    {children}
  </Navigator>
);

export const RootScreen = Screen;
