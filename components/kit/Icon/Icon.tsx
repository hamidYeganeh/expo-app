import { FC } from "react";
import { IconProps, ICONS_MAPPING } from "./Icon.types";
import { MaterialIcons } from "@expo/vector-icons";
import { Theme } from "@/constants/theme";

const Icon: FC<IconProps> = (props) => {
  const { name, color = Theme.palette.text.primary, size = "md" } = props;

  const IconSize =
    typeof size === "number" ? size : Theme.typography.fontSize[size];

  return (
    <MaterialIcons name={ICONS_MAPPING[name]} color={color} size={IconSize} />
  );
};

export default Icon;
