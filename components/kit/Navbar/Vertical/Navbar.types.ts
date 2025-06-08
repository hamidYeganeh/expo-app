import {
  Icon,
  IconProps,
  GlyphMap,
} from "@expo/vector-icons/build/createIconSet";
import { Href } from "expo-router";
import { PropsWithChildren } from "react";

export interface INavbarContextState {
  isNavbarCollapsed: boolean;
}
export interface NavbarProps extends PropsWithChildren {}
export interface NavbarItemProps {
  icon: string;
  title: string;
  path?: Href;
  children?: Omit<Partial<NavbarItemProps>, "children">[];
}
export interface NavbarSubItemProps
  extends Omit<NavbarItemProps, "children" | "icon"> {}
