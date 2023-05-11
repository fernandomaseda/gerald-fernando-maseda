export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: { screen: "Screen1" | "Screen2" };
      Drawer: { screen: "Start" | "Your Cart"};
      Contact: undefined;
      Start: undefined;
      'Sign Out': undefined;
    }
  }
}