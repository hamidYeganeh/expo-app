import { FC } from "react";
import { NavbarSubItemProps } from "./Navbar.types";
import { StyleSheet, Text, View } from "react-native";
import { i18n } from "@/i18n";
import { Theme } from "@/constants/theme";
import { Link } from "expo-router";

export const NavbarVerticalSubItem: FC<NavbarSubItemProps> = (props) => {
  const { title, path } = props;

  return (
    <Link href={{ pathname: "/home" }} style={NavbarVerticalSubItemStyles.root}>
      <Text style={[NavbarVerticalSubItemStyles.title]}>{title}</Text>
      <View style={[NavbarVerticalSubItemStyles.dot]}></View>
    </Link>
  );
};

const NavbarVerticalSubItemStyles = StyleSheet.create({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: i18n.flexDirection,
    gap: Theme.shape.spacing(2),
    paddingVertical: Theme.shape.spacing(2),
    paddingHorizontal: Theme.shape.spacing(4),
    cursor: "pointer",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: Theme.shape.radius.rounded,
    backgroundColor: Theme.palette.border,
  },
  title: {
    fontSize: Theme.typography.fontSize.sm,
  },
});
