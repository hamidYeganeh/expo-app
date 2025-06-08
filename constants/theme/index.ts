import { palette, typography, shape, shadows, transitions } from "./core";

function getTheme() {
  const direction = "rtl";
  return { palette, typography, shape, transitions, shadows, direction };
}

export const Theme = getTheme();
