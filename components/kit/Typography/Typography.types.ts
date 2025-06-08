import { TextProps } from "react-native";

export type TypographyFontWeight =
  | "Regular"
  | "SemiBold"
  | "Bold"
  | "ExtraBold"
  | "ExtraBlack";

export interface TypographyProps extends TextProps {
  fontWeight?: TypographyFontWeight;
}
