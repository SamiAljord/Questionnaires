import { Stack } from "expo-router";
import { Colors } from "react-native-ui-lib";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

Colors.loadDesignTokens({ primaryColor: "#E92227" });
Colors.loadColors({ grey1: "#3B3A3A" });

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="result/[risk]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
}
