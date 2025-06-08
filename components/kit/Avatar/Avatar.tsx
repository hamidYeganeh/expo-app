import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AvatarProps } from "./Avatar.types";
import { Theme } from "@/constants/theme";

const Avatar: FC<AvatarProps> = (props) => {
  const { size = "md", source, href, src } = props;

  return (
    <View style={[AvatarStyles.root, AvatarStyles[size]]}>
      <Image
        style={AvatarStyles.image}
        source={{ uri: src, width: AvatarStyles[size].width }}
      />
    </View>
  );
};

const AvatarStyles = StyleSheet.create({
  root: {
    borderRadius: Theme.shape.radius.rounded,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sm: {
    width: 32,
    height: 32,
  },
  md: {
    width: 40,
    height: 40,
  },
  lg: {
    width: 48,
    height: 48,
  },
});

export default Avatar;
