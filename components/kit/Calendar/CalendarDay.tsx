import { FC } from "react";
import { CalendarDayProps } from "./Calendar.types";
import { StyleSheet, View } from "react-native";
import { Theme } from "@/constants/theme";
import { Typography } from "../Typography";

export const CalendarDay: FC<CalendarDayProps> = (props) => {
  const { render, ...rootProps } = props;
  const {
    text,
    isSelected,
    isCurrentMonth,
    isDisabled,
    rangeStart,
    rangeEnd,
    ...otherProps
  } = rootProps;

  return (
    <View
      {...otherProps}
      style={[
        CalendarDayStyles.root,
        rangeStart && CalendarDayStyles.rootRangeStart,
        rangeEnd && CalendarDayStyles.rootRangeEnd,
        isSelected && CalendarDayStyles.rootSelected,
      ]}
    >
      <Typography
        style={[
          CalendarDayStyles.dayText,
          isDisabled && CalendarDayStyles.dayTextDisabled,
          !isCurrentMonth && CalendarDayStyles.dayTextOutside,
        ]}
      >
        {text}
      </Typography>

      {render && render(rootProps)}
    </View>
  );
};

const CalendarDayStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: Theme.shape.spacing(2),
    borderWidth: 1.5,
    borderRadius: Theme.shape.radius.md,
    borderColor: Theme.palette.background.default,
    transitionDuration: Theme.transitions.durations.md,
  },
  rootSelected: {
    backgroundColor: Theme.palette.background.default,
  },
  rootRangeStart: {
    backgroundColor: "red",
  },
  rootRangeEnd: {
    backgroundColor: "blue",
  },
  dayText: {
    color: Theme.palette.text.primary,
    fontFamily: Theme.typography.fontFamily.yekanBakh.semiBold,
    fontWeight: "600",
  },
  dayTextOutside: {
    color: Theme.palette.gray.light,
  },
  dayTextDisabled: {
    color: Theme.palette.gray.light,
  },
  dayItem: {
    width: 14,
    height: 14,
    borderRadius: Theme.shape.radius.rounded,
    borderColor: Theme.palette.background.default,
    borderWidth: 1.5,
    borderStyle: "dashed",
  },
  dayItemSelected: {
    backgroundColor: Theme.palette.common.white,
    borderColor: Theme.palette.common.white,
  },
});
