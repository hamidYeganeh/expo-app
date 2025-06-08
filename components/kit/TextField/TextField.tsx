import { Theme } from "@/constants/theme";
import { FC, useState } from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";
import { TextFieldProps } from "./TextField.types";
import { Label } from "@/components/kit";
import { usePlatform } from "@/hooks";

const TextField: FC<TextFieldProps> = (props) => {
  const {
    color = "primary",
    size = "md",
    variant = "contained",
    label,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const { isWeb } = usePlatform();

  return (
    <View style={TextFieldStyles.root}>
      {label && (
        <Label
          style={[
            TextFieldStyles.label,
            isWeb &&
              TextFieldStyles[isFocused ? "labelFocused" : "labelBlured"],
          ]}
        >
          {label}
        </Label>
      )}
      <TextInput
        style={[
          TextFieldStyles.input,
          TextFieldStyles[size],
          getTextFieldVariants(isFocused, variant, color),
        ]}
        selectionColor={Theme.palette.primary.lighter}
        underlineColorAndroid={"transparent"}
        cursorColor={Theme.palette.primary.light}
        placeholderTextColor={Theme.palette.gray.main}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...otherProps}
      />
    </View>
  );
};

function getTextFieldVariants(
  isFocused: boolean,
  variant: TextFieldProps["variant"],
  color: TextFieldProps["color"]
) {
  const palette = Theme.palette[color!];

  switch (variant) {
    case "contained":
      return {
        borderWidth: isFocused ? 2 : 1,
        borderColor: isFocused ? palette.main : Theme.palette.border,
        color: palette.main,
      };
    case "outlined":
      return {
        backgroundColor: isFocused ? palette.lighter : "transparent",
        borderColor: palette.main,
        borderWidth: 2,
        color: palette.main,
      };
    case "standard":
      return {
        backgroundColor: isFocused ? palette.lighter : "transparent",
        borderColor: palette.main,
        borderWidth: 2,
        color: palette.main,
      };
    default:
      return {};
  }
}

const TextFieldStyles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: Theme.shape.spacing(2),
    position: "relative",
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    transitionDuration: Theme.transitions.durations.md,
    padding: Theme.shape.spacing(2),
    borderRadius: Theme.shape.radius.md,
    zIndex: 1,
    writingDirection: "rtl",
  },
  sm: {
    height: 48,
    fontWeight: "700",
    fontSize: Theme.typography.fontSize.xs,
    paddingHorizontal: Theme.shape.spacing(2),
    paddingVertical: Theme.shape.spacing(1),
  },
  md: {
    height: 56,
    fontWeight: "700",
    fontSize: Theme.typography.fontSize.lg,
    paddingHorizontal: Theme.shape.spacing(3),
    paddingVertical: Theme.shape.spacing(2),
  },
  lg: {
    height: 64,
    fontWeight: "700",
    fontSize: Theme.typography.fontSize.xl,
    paddingHorizontal: Theme.shape.spacing(4),
    paddingVertical: Theme.shape.spacing(3),
  },
  label: {
    fontSize: Theme.typography.fontSize.xs,
    fontWeight: "400",
    color: Theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionProperty: "all",
    transitionDuration: Theme.transitions.durations.sm,
    backgroundColor: "white",
    paddingHorizontal: Theme.shape.spacing(0.5),
  },
  labelFocused: {
    ...Platform.select({
      web: {
        width: "auto",
        position: "absolute",
        top: -Theme.typography.fontSize.xs / 2,
        left: Theme.shape.spacing(4),
        marginVertical: "auto",
        zIndex: 2,
      },
    }),
  },
  labelBlured: {
    ...Platform.select({
      web: {
        height: "100%",
        width: "auto",
        position: "absolute",
        top: "0%",
        left: Theme.shape.spacing(4),
        marginVertical: "auto",
        zIndex: 0,
      },
    }),
  },
});

export default TextField;
