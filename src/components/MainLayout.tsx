import colors from "tailwindcss/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import { FC, ReactNode } from "react";
import { Header } from "@components/Header";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { useNavigationState } from "@react-navigation/native";

type MainLayoutProps = {
  children?: ReactNode;
  withHeader?: boolean;
};

export const MainLayout: FC<MainLayoutProps> = ({ children, withHeader }) => {
  const route = useRoute(); // current Atom Screen

  const title = (route?.params as { [k: string]: any })?.title ?? "Start";

  const progress: any = useDrawerProgress();

  const animatedStyle = useAnimatedStyle((): any => {
    return {
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
      className="flex-1 bg-white px-5 pt-5 overflow-hidden"
      style={animatedStyle}
    >
      {withHeader && <Header title={title} classNames="mb-10" />}
      {children}
    </Animated.View>
  );
};
