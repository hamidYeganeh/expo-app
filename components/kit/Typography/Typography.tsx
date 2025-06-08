// lib
import { StyleSheet, Text } from "react-native";
// types
import type { FC } from "react";
import type { TypographyProps } from "./Typography.types";
import { i18n } from "@/i18n";
import { Theme } from "@/constants/theme";

const Typography: FC<TypographyProps> = (props) => {
  const { children, style, fontWeight = "Regular", ...otherProps } = props;

  const lang = "fa";

  function getFontFamily() {
    if (fontWeight) {
      return TypographyStyles[`${lang}${fontWeight}`];
    } else {
      return TypographyStyles.faRegular;
    }
  }

  return (
    <Text
      style={[
        {
          textAlign: i18n.isRTL ? "right" : "left",
        },
        getFontFamily(),
        TypographyStyles.root,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default Typography;

const TypographyStyles = StyleSheet.create({
  root: {
    margin: 0,
  },
  faRegular: {
    fontWeight: "500",
    fontFamily: Theme.typography.fontFamily.yekanBakh.regular,
  },
  faSemiBold: {
    fontWeight: "600",
    fontFamily: Theme.typography.fontFamily.yekanBakh.semiBold,
  },
  faBold: {
    fontWeight: "700",
    fontFamily: Theme.typography.fontFamily.yekanBakh.bold,
  },
  faExtraBold: {
    fontWeight: "800",
    fontFamily: Theme.typography.fontFamily.yekanBakh.extraBold,
  },
  faExtraBlack: {
    fontWeight: "900",
    fontFamily: Theme.typography.fontFamily.yekanBakh.extraBlack,
  },
});
