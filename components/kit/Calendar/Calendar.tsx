import { FC, useState } from "react";
import DateTimePicker, {
  DateType,
  CalendarDay as CalendarDayProps,
} from "react-native-ui-datepicker";
import * as Localization from "expo-localization";
import { StyleSheet, View } from "react-native";
import { Theme } from "@/constants/theme";
import { CalendarDay } from "./CalendarDay";

import Feather from "@expo/vector-icons/Feather";
import { CalendarArrow } from "./CalendarArrow";
import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarYear } from "./CalendarYear";

const Calendar = () => {
  const [selected, setSelected] = useState<DateType>();

  return (
    <>
      <DateTimePicker
        mode="single"
        date={selected}
        onChange={({ date }) => setSelected(date)}
        locale={Localization.getLocales()[0]?.languageCode || "fa-IR"}
        calendar={"jalali"}
        containerHeight={450}
        style={CalendarStyles.root}
        firstDayOfWeek={6}
        showOutsideDays
        components={{
          IconNext: <CalendarArrow arrowDirection="left" />,
          IconPrev: <CalendarArrow arrowDirection="right" />,
          Day: (day) => (
            <CalendarDay
              {...day}
              render={(params) => <CalendarDayRequestItem {...params} />}
            />
          ),
          Year: (year) => <CalendarYear {...year} />,
          Month: (month) => <CalendarMonth {...month} />,
          Weekday: (weekday) => <CalendarWeekday {...weekday} />,
        }}
        styles={{
          weekdays: CalendarStyles.weekdays,
          weekday: CalendarStyles.weekday,
          days: CalendarStyles.days,
          day_cell: CalendarStyles.day_cell,
          outside: CalendarStyles.outside,
          outside_label: CalendarStyles.outside_label,
          months: CalendarStyles.months,
          month_label: {
            fontSize: 48,
          },
        }}
      />
    </>
  );
};

const CalendarDayRequestItem: FC<CalendarDayProps> = (props) => {
  const { isSelected } = props;
  return (
    <View
      style={[
        {
          width: 24,
          height: 24,
          padding: Theme.shape.spacing(0.75),
          aspectRatio: 1 / 1,
          borderRadius: Theme.shape.radius.rounded,
          borderWidth: 2,
          borderStyle: "dashed",
          borderColor: isSelected
            ? Theme.palette.common.white
            : Theme.palette.background.default,
          backgroundColor: Theme.palette.common.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        // CalendarDayStyles.dayItem,
        // isSelected && CalendarDayStyles.dayItemSelected,
      ]}
    >
      {isSelected && (
        <Feather
          name="coffee"
          color={Theme.palette.primary.main}
          size={Theme.typography.fontSize.sm}
        />
      )}
    </View>
  );
};

export default Calendar;

const CalendarStyles = StyleSheet.create({
  root: {
    width: "100%",
    maxWidth: 450,
  },
  weekdays: {
    backgroundColor: Theme.palette.background.default,
    paddingVertical: Theme.shape.spacing(2),
    borderRadius: Theme.shape.radius.md,
    height: 32,
  },
  weekday: {
    fontSize: Theme.typography.fontSize.xs,
    color: Theme.palette.text.disabled,
    fontWeight: "600",
  },
  months: {
    backgroundColor: Theme.palette.background.paper,
    borderColor: Theme.palette.background.default,
    borderWidth: 2,
    borderRadius: Theme.shape.radius.md,
    padding: Theme.shape.spacing(2),
  },
  days: {
    backgroundColor: Theme.palette.background.paper,
    marginTop: Theme.shape.spacing(2),
  },
  day: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: Theme.palette.background.default,
    borderRadius: Theme.shape.radius.md,
  },
  day_cell: {
    paddingVertical: Theme.shape.spacing(0.5),
    paddingHorizontal: Theme.shape.spacing(0.75),
    overflow: "hidden",
  },
  outside: {
    pointerEvents: "none",
  },
  outside_label: {
    color: Theme.palette.gray.light,
  },
});
