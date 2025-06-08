import { Theme } from "@/constants/theme";
import { NAVBAR } from "@/configs/layouts.config";
import { StyleSheet, View } from "react-native";
import { FC } from "react";
import { NavbarProps } from "./Navbar.types";
import { useAppSelector } from "@/hooks";
import { ScrollView } from "react-native-gesture-handler";

const NavbarVertical: FC<NavbarProps> = (props) => {
  const { children } = props;
  const { isCollapsed } = useAppSelector((state) => state.pagesLayout);

  return (
    <View
      style={[
        NavbarVerticalStyles.root,
        isCollapsed && NavbarVerticalStyles.rootCollapsed,
      ]}
    >
      <ScrollView style={NavbarVerticalStyles.container}>{children}</ScrollView>
    </View>
  );
};
export default NavbarVertical;

const NavbarVerticalStyles = StyleSheet.create({
  root: {
    width: NAVBAR.MAIN_LAYOUT_NAVBAR_WIDTH_DESKTOP,
    height: "100%",
    backgroundColor: Theme.palette.background.paper,
    borderRadius: Theme.shape.radius.md,
    padding: Theme.shape.spacing(4),
    transitionDuration: Theme.transitions.durations.md,
  },
  rootCollapsed: {
    width: NAVBAR.MAIN_LAYOUT_NAVBAR_WIDTH_DESKTOP_COLLAPSED,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: Theme.shape.spacing(2),
  },
});
