import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerNavigator, DrawerScreen } from "./DrawerNavigator";
import { EmbeddedStack, EmbeddedScreen } from "./EmbeddedStack";
import { TabNavigator, TabScreen } from "./TabNavigator";
import { AtomStack, AtomScreen } from "./AtomStack";
import { RootStack, RootScreen } from "./RootStack";

import { Home } from "@screens/Home";
import { Contact } from "@screens/Contact";
import { SignOut } from "@screens/SignOut";
import { Screen1 } from "@screens/Screen1";
import { Screen2 } from "@screens/Screen2";
import { YourCart } from "@screens/YourCart";

const TabComponent = () => (
  <TabNavigator>
    <TabScreen name="Home" component={HomeComponent} />
    <TabScreen name="Contact" component={Contact} />
  </TabNavigator>
);

const HomeComponent = () => (
  <AtomStack>
    <AtomScreen name="HomeMain" component={Home} />
    <AtomScreen name="Screen1" component={Screen1} />
    <AtomScreen name="Screen2" component={Screen2} />
  </AtomStack>
);

const YourCartComponent = () => (
  <AtomStack>
    <AtomScreen name="YourCartMain" component={YourCart} />
  </AtomStack>
);

const DrawerComponent = () => (
  <DrawerNavigator>
    {
      <>
        <DrawerScreen name="Start">
          {(props: any) => (
            <EmbeddedStack {...props}>
              <EmbeddedScreen name="TabNavigator" component={TabComponent} />
            </EmbeddedStack>
          )}
        </DrawerScreen>
        <DrawerScreen name="Your Cart">
          {(props: any) => (
            <EmbeddedStack {...props}>
              <EmbeddedScreen
                name="YourCartStack"
                component={YourCartComponent}
              />
            </EmbeddedStack>
          )}
        </DrawerScreen>
      </>
    }
  </DrawerNavigator>
);

export function Routes() {
  return (
    <View className="flex-1 bg-transparent">
      <NavigationContainer>
        <RootStack>
          <RootScreen name="Drawer" component={DrawerComponent} />
          <RootScreen name="Sign Out" component={SignOut} />
        </RootStack>
      </NavigationContainer>
    </View>
  );
}
