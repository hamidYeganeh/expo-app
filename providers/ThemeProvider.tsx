import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { FC, PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const colorScheme = useColorScheme();
  return (
    <RNThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {props.children}
    </RNThemeProvider>
  );
};
