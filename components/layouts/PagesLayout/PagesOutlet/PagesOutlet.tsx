import { Theme } from "@/constants/theme";
import { HEADER } from "@/configs/layouts.config";
import { FC, PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const PagesOutlet: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={PagesOutletStyles.root}>
          <View style={PagesOutletStyles.container}>{children}</View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const PagesOutletStyles = StyleSheet.create({
  root: {
    width: "100%",
    height:
      Dimensions.get("window").height -
      HEADER.PAGES_LAYOUT_HEADER_HEIGHT_DESKTOP,
    backgroundColor: Theme.palette.background.default,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: Theme.shape.radius.md,
    padding: 16,
    backgroundColor: Theme.palette.background.paper,
  },
});
