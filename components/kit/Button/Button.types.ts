import { Theme } from "@/constants/theme";
import { PressableProps } from "react-native";

export type ButtonColors = Exclude<
  keyof typeof Theme.palette,
  "text" | "background" | "common" | "gray" | "border"
>;

export interface ButtonProps extends PressableProps {
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "text" | "light";
  color?: ButtonColors;
  loading?: boolean;
}
