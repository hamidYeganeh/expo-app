import { Platform } from "react-native";

export const usePlatform = () => {
  const isWeb = Platform.OS === "web";
  const isIOS = Platform.OS === "ios";
  const isMacOS = Platform.OS === "macos";
  const isAndroid = Platform.OS === "android";
  const isTv = Platform.isTV;

  return {
    isWeb,
    isIOS,
    isMacOS,
    isAndroid,
    isTv,
    select: Platform.select,
  };
};
