import { SplashScreen, Stack } from "expo-router";
import { I18nManager } from "react-native";
import { useEffect } from "react";
import { ReduxProvider, ThemeProvider } from "@/providers";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { MainHeader } from "@/components/layouts/MainLayout";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    YekanBakhRegular: require("../assets/fonts/YekanBakh/YekanBakh-ExtraBold.ttf"),
    YekanBakhSemiBold: require("../assets/fonts/YekanBakh/YekanBakh-SemiBold.ttf"),
    YekanBakhBold: require("../assets/fonts/YekanBakh/YekanBakh-Bold.ttf"),
    YekanBakhExtraBold: require("../assets/fonts/YekanBakh/YekanBakh-ExtraBlack.ttf"),
    YekanBakhExtraBlack: require("../assets/fonts/YekanBakh/YekanBakh-ExtraBlack.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      I18nManager.isRTL = true;
    }
  }, [I18nManager]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider>
          <ReduxProvider>
            <Stack>
              <Stack.Screen
                name="(main)"
                options={{
                  header: MainHeader,
                  headerBackground: () => "transparent",
                }}
              />
              <Stack.Screen
                name="(auth)"
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </ReduxProvider>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
