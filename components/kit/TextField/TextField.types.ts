import { Theme } from "@/constants/theme";
import { TextInputProps } from "react-native";

type ITextFieldColors = Exclude<
  keyof typeof Theme.palette,
  "text" | "background" | "common" | "gray" | "border"
>;
type ITextFieldVariants = "contained" | "outlined" | "standard";

export interface TextFieldProps extends TextInputProps {
  size?: "sm" | "md" | "lg";
  variant?: ITextFieldVariants;
  color?: ITextFieldColors;
  label?: string;
}
