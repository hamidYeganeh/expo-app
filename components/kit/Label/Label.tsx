import { FC } from "react";
import { StyleSheet } from "react-native";
import { LabelProps } from "./Label.types";
import { Theme } from "@/constants/theme";
import { Typography } from "@/components/kit/Typography";


const Label: FC<LabelProps> = (props) => {
  const { children, style, ...otherProps } = props;
  return (
    <Typography style={[LabelStyles.root, style]} {...otherProps}>
      {children}
    </Typography>
  );
};
export default Label;

const LabelStyles = StyleSheet.create({
  root: {
    fontSize: Theme.typography.fontSize.sm,
    fontWeight: "500",
  },
});
