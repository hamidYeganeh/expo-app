import { Entypo } from "@expo/vector-icons";
import { IconButton } from "../IconButton";
import { Theme } from "@/constants/theme";
import { FC } from "react";
import { CalendarDayArrowProps } from "./Calendar.types";

export const CalendarArrow: FC<CalendarDayArrowProps> = (props) => {
  const { arrowDirection } = props;

  return (
    <IconButton variant="text">
      <Entypo
        name={`chevron-${arrowDirection}`}
        size={Theme.typography.fontSize.xl}
        color={Theme.palette.text.primary}
      />
    </IconButton>
  );
};
