const FontSize = {
  // "0.75rem",
  xs: 12,
  // "0.875rem",
  sm: 14,
  // "1rem",
  md: 16,
  // "1.125rem",
  lg: 18,
  // "1.25rem",
  xl: 20,
};
const FontWeight: Record<string, number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
const FontFamily = {
  yekanBakh: {
    regular: "YekanBakh",
    semiBold: "YekanBakhSemiBold",
    bold: "YekanBakhBold",
    extraBold: "YekanBakhExtraBold",
    extraBlack: "YekanBakhExtraBlack",
  },
};
export const typography = {
  fontSize: FontSize,
  fontWeight: FontWeight,
  fontFamily: FontFamily,
};
