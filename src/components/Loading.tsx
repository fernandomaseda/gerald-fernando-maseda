import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <ActivityIndicator color={colors.blue[500]} size="large" />
    </View>
  );
}
