// components
import { Typography } from "../Typography";
// lib
import { StyleSheet } from "react-native";
// constants
import { Theme } from "@/constants/theme";
// types
import type { FC } from "react";
import type { CalendarWeekdayProps } from "./Calendar.types";

export const CalendarWeekday: FC<CalendarWeekdayProps> = (props) => {
  const { name } = props;
  return (
    <Typography style={CalendarWeekdayStyleSheet.root}>{name.min}</Typography>
  );
};

const CalendarWeekdayStyleSheet = StyleSheet.create({
  root: {
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.palette.text.disabled,
    fontWeight: "600",
  },
});
