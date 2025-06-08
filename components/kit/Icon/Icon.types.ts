import { MaterialIcons } from "@expo/vector-icons";
import { SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue } from "react-native";

export const ICONS_MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    ComponentProps<typeof MaterialIcons>["name"]
  >
>;

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconName = keyof typeof ICONS_MAPPING;

export interface IconProps {
  name: IconName;
  color?: string | OpaqueColorValue;
  size?: number | IconSize;
  weight?: SymbolWeight;
}
