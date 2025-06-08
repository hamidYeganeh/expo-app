import { FC } from "react";
import { Typography } from "../Typography";
import { CalendarYearProps } from "./Calendar.types";
import { StyleSheet } from "react-native";
import { Theme } from "@/constants/theme";

export const CalendarYear: FC<CalendarYearProps> = (props) => {
  const { text, isSelected } = props;

  return (
    <Typography
      style={[
        CalendarYearStyles.root,
        isSelected && CalendarYearStyles.RootSelected,
      ]}
    >
      {text}
    </Typography>
  );
};

const CalendarYearStyles = StyleSheet.create({
  root: {
    width: "100%",
    textAlign: "center",
    fontSize: Theme.typography.fontSize.md,
    borderRadius: Theme.shape.radius.md,
    paddingVertical: Theme.shape.spacing(1.5),
  },
  RootSelected: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
});
