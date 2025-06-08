import { Theme } from "@/constants/theme";
import { PressableProps } from "react-native";

export type IconButtonColors = Exclude<
  keyof typeof Theme.palette,
  "text" | "background" | "common" | "border"
>;

export interface IconButtonProps extends PressableProps {
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "text" | "light";
  color?: IconButtonColors;
}
