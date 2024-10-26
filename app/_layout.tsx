import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "montserrat-regular": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "montserrat-medium": require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    "montserrat-bold": require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "montserrat-light": require("../assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
