import colors from "tailwindcss/colors";
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

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      {withHeader && <Header title={title} classNames="mb-10" />}
      {children}
    </View>
  );
};
