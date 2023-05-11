import colors from "tailwindcss/colors";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const progress: any = useDrawerProgress();

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 40],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        borderTopLeftRadius: borderRadius,
      }}
      className="flex-1 bg-white px-5 pt-5 overflow-hidden"
    >
      {children}
    </Animated.View>
  );
};
