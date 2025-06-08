import { FC, forwardRef, ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { IconButtonColors, IconButtonProps } from "./IconButton.types";
import { Theme } from "@/constants/theme";

const IconButton = forwardRef<View, IconButtonProps>((props, ref) => {
  const {
    children,
    size = "md",
    variant = "contained",
    color = "gray",
    style,
    ...otherProps
  } = props;

  return (
    <Pressable ref={ref} style={[IconButtonStyles.root]} {...otherProps}>
      {({ hovered, pressed }) => (
        <View
          style={[
            IconButtonStyles.container,
            IconButtonStyles[size],
            IconButtonStyles[variant],
            getIconButtonVariants(hovered || pressed, variant, color),
          ]}
        >
          {children as ReactNode}
        </View>
      )}
    </Pressable>
  );
});

IconButton.displayName = "IconButton";

function getIconButtonVariants(
  isHoveredOrPressed: boolean,
  variant: IconButtonProps["variant"],
  color: IconButtonColors
) {
  const palette = Theme.palette[color];

  switch (variant) {
    case "contained":
      return {
        backgroundColor: isHoveredOrPressed ? palette.dark : palette.main,
        color: Theme.palette.text.light,
      };
    case "outlined":
      return {
        backgroundColor: isHoveredOrPressed ? palette.lighter : "transparent",
        borderColor: palette.main,
        borderWidth: 2,
        color: palette.main,
      };
    case "text":
      return {
        backgroundColor: isHoveredOrPressed ? palette.lighter : "transparent",
        color: palette.main,
      };
    case "light":
      return {
        backgroundColor: palette.lighter,
        color: isHoveredOrPressed ? palette.dark : palette.main,
      };
    default:
      return {};
  }
}

const IconButtonStyles = StyleSheet.create({
  root: {
    overflow: "hidden",
    borderRadius: Theme.shape.radius.rounded,
  },
  container: {
    width: "100%",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionProperty: "all",
    transitionDuration: Theme.transitions.durations.md,
    borderRadius: Theme.shape.radius.rounded,
  },
  sm: {
    fontSize: Theme.typography.fontSize.xs,
    width: Theme.shape.spacing(12),
  },
  md: {
    fontSize: Theme.typography.fontSize.md,
    width: Theme.shape.spacing(14),
  },
  lg: {
    fontSize: Theme.typography.fontSize.lg,
    width: Theme.shape.spacing(16),
  },
  contained: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.text.light,
  },
  containedHovered: {
    backgroundColor: Theme.palette.primary.dark,
  },
  outlined: {
    backgroundColor: "transparent",
    color: Theme.palette.primary.main,
    borderWidth: 2,
    borderColor: Theme.palette.primary.main,
    borderStyle: "solid",
  },
  outlinedHovered: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
  text: {
    backgroundColor: "transparent",
    color: Theme.palette.primary.main,
  },
  textHovered: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
  light: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
  lightHovered: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.dark,
  },
});

export default IconButton;
