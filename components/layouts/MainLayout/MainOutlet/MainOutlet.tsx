import { Theme } from "@/constants/theme";
import { HEADER } from "@/configs/layouts.config";
import { i18n } from "@/i18n";
import { FC, PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { MainNavbar } from "../MainNavbar";
import { ScrollView } from "react-native-gesture-handler";

export const MainOutlet: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const widthBound = Dimensions.get("screen").width;

  return (
    <View style={[MainOutletStyles.root]}>
      {widthBound > 900 && <MainNavbar />}
      <ScrollView style={MainOutletStyles.container}>{children}</ScrollView>
    </View>
  );
};

const MainOutletStyles = StyleSheet.create({
  root: {
    width: "100%",
    height:
      Dimensions.get("window").height -
      HEADER.PAGES_LAYOUT_HEADER_HEIGHT_DESKTOP,
    backgroundColor: Theme.palette.background.default,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: i18n.flexDirection,
    alignItems: "center",
    gap: Theme.shape.spacing(4),
  },
  container: {
    flex: 1,
    height: "100%",
    borderRadius: Theme.shape.radius.md,
    padding: 16,
    backgroundColor: Theme.palette.background.paper,
  },
});
