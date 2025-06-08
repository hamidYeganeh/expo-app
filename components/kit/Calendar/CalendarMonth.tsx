import { FC } from "react";
import { CalendarMonthProps } from "./Calendar.types";
import { Typography } from "../Typography";
import { StyleSheet } from "react-native";
import { Theme } from "@/constants/theme";

export const CalendarMonth: FC<CalendarMonthProps> = (props) => {
  const { name, isSelected } = props;
  return (
    <Typography
      style={[
        CalendarMonthStyles.root,
        isSelected && CalendarMonthStyles.rootSelected,
      ]}
    >
      {name.short}
    </Typography>
  );
};

const CalendarMonthStyles = StyleSheet.create({
  root: {
    width: "100%",
    textAlign: "center",
    fontSize: Theme.typography.fontSize.md,
    borderRadius: Theme.shape.radius.md,
    paddingVertical: Theme.shape.spacing(1.5),
  },
  rootSelected: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
});
