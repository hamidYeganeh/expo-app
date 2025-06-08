import { Theme } from "@/constants/theme";
import { HEADER } from "@/configs/layouts.config";
import { StyleSheet, View } from "react-native";
import { MainHeaderAccount } from "./MainHeaderAccount";
import { MainHeaderNotifications } from "./MainHeaderNotifications";
import { i18n } from "@/i18n";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const MainHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[MainHeaderStyles.root, { marginTop: insets.top }]}>
      <View style={MainHeaderStyles.container}>
        <View style={MainHeaderStyles.wrapper}>
          <MainHeaderAccount />
          <MainHeaderNotifications />
        </View>
      </View>
    </View>
  );
};
const MainHeaderStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: HEADER.MAIN_LAYOUT_HEADER_HEIGHT_MOBILE,
    backgroundColor: Theme.palette.background.default,
  },
  container: {
    width: "100%",
    backgroundColor: Theme.palette.background.paper,
    paddingHorizontal: Theme.shape.spacing(4),
    paddingVertical: Theme.shape.spacing(4),
    borderBottomLeftRadius: Theme.shape.radius.md,
    borderBottomRightRadius: Theme.shape.radius.md,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: i18n.flexDirection,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.shape.spacing(0),
  },
  title: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.palette.text.primary,
    fontWeight: "700",
  },
});
