import { Theme } from "@/constants/theme";
import { HEADER } from "@/configs/layouts.config";
import { StyleSheet, View } from "react-native";
import { Typography } from "@/components/kit";

export const PagesHeader = () => {
  return (
    <View style={PagesHeaderStyles.root}>
      <View style={PagesHeaderStyles.container}>
        <Typography>Hamid</Typography>
      </View>
    </View>
  );
};
const PagesHeaderStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: HEADER.PAGES_LAYOUT_HEADER_HEIGHT_DESKTOP,
    backgroundColor: Theme.palette.background.paper,
    padding: 16,
    borderBottomLeftRadius: Theme.shape.radius.md,
    borderBottomRightRadius: Theme.shape.radius.md,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: Theme.typography.fontSize.md,
    color: Theme.palette.text.primary,
    fontWeight: "700",
  },
});
