import { Avatar, Typography } from "@/components/kit";
import { Theme } from "@/constants/theme";
import { i18n } from "@/i18n";
import { Pressable, StyleSheet, View } from "react-native";

export const MainHeaderAccount = () => {
  const user = {
    user: {
      avatar:
        "https://randomwordgenerator.com/img/picture-generator/53e4d4404a51a814f1dc8460962e33791c3ad6e04e507749772f78d4924bc6_640.jpg",
      name: "نگین محمدی",
    },
  };

  return (
    <Pressable style={MainHeaderAccountStyles.root}>
      <Avatar src={user.user.avatar} />

      <View style={MainHeaderAccountStyles.titlesWrapper}>
        <Typography>
          {i18n.t("title.welcome", { name: user.user.name || "-" })}
        </Typography>
        <Typography style={MainHeaderAccountStyles.user}>
          {user.user.name}
        </Typography>
      </View>
    </Pressable>
  );
};

const MainHeaderAccountStyles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: i18n.flexDirection,
    alignItems: "center",
    gap: Theme.shape.spacing(2),
  },
  titlesWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  welcomeTitle: {
    fontWeight: "700",
    fontSize: Theme.typography.fontSize.sm,
    color: Theme.palette.text.dark,
  },
  user: {
    fontWeight: "400",
    fontSize: Theme.typography.fontSize.xs,
    color: Theme.palette.text.primary,
  },
});
