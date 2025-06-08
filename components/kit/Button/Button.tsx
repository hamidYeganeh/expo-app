import { FC, ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ButtonColors, ButtonProps } from "./Button.types";
import { Theme } from "@/constants/theme";
import { Typography } from "@/components/kit";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    size = "md",
    variant = "contained",
    color = "primary",
    loading,
    disabled,
    ...otherProps
  } = props;

  return (
    <Pressable style={[ButtonStyles.root]} {...otherProps}>
      {({ hovered, pressed }) => {
        const ButtonVariant = getButtonVariants(
          hovered || pressed,
          variant,
          color,
          disabled
        );
        return (
          <View
            style={[ButtonStyles.container, ButtonStyles[size], ButtonVariant]}
          >
            <Typography
              fontWeight="Bold"
              style={[
                {
                  fontSize: ButtonStyles[size].fontSize,
                  color: ButtonVariant.color,
                },
              ]}
            >
              {loading ? (
                <MaterialIcon name="loading" style={[ButtonStyles.loading]} />
              ) : (
                (children as ReactNode)
              )}
            </Typography>
          </View>
        );
      }}
    </Pressable>
  );
};

function getButtonVariants(
  isHoveredOrPressed: boolean,
  variant: ButtonProps["variant"],
  color: ButtonColors,
  disabled: ButtonProps["disabled"]
) {
  const palette = Theme.palette[color];

  switch (variant) {
    case "contained":
      if (disabled) {
        return {
          backgroundColor: Theme.palette.gray.light,
          color: Theme.palette.text.light,
        };
      }
      return {
        backgroundColor: isHoveredOrPressed ? palette.dark : palette.main,
        color: Theme.palette.text.light,
        borderWidth: 6,
        borderColor: palette.lighter,
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

const ButtonStyles = StyleSheet.create({
  root: {
    width: "100%",
    userSelect: "none",
    fontFamily: Theme.typography.fontFamily.yekanBakh.semiBold,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    transitionProperty: "all",
    transitionDuration: Theme.transitions.durations.md,
    borderRadius: Theme.shape.radius.md,
  },
  sm: {
    height: 48,
    fontSize: Theme.typography.fontSize.sm,
    paddingHorizontal: Theme.shape.spacing(2),
    paddingVertical: Theme.shape.spacing(1),
  },
  md: {
    height: 56,
    fontSize: Theme.typography.fontSize.md,
    paddingHorizontal: Theme.shape.spacing(3),
    paddingVertical: Theme.shape.spacing(2),
  },
  lg: {
    height: 64,
    fontSize: Theme.typography.fontSize.lg,
    paddingHorizontal: Theme.shape.spacing(4),
    paddingVertical: Theme.shape.spacing(3),
  },
  loading: {
    fontSize: Theme.typography.fontSize.md,
    transform: "rotate(760deg)",
  },
});

export default Button;
