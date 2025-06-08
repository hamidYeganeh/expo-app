import { LinkProps } from "expo-router";
import { Image, ImageProps } from "react-native";

export interface AvatarProps
  extends Pick<ImageProps, "source" | "src">,
    Pick<Partial<LinkProps>, "href"> {
  size?: "sm" | "md" | "lg";
}
