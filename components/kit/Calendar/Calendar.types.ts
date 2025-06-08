import type { ReactNode } from "react";
import type {
  CalendarDay,
  CalendarMonth,
  CalendarWeek,
  CalendarYear,
} from "react-native-ui-datepicker";

export type CalendarDayRenderProps = CalendarDay;
export interface CalendarDayProps extends CalendarDay {
  render?: (props: CalendarDayRenderProps) => ReactNode;
}
export interface CalendarDayArrowProps {
  arrowDirection: "left" | "right";
}
export interface CalendarWeekdayProps extends CalendarWeek {}
export interface CalendarMonthProps extends CalendarMonth {}
export interface CalendarYearProps extends CalendarYear {}
