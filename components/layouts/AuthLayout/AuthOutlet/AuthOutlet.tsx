import { Typography } from "@/components/kit";
import { Theme } from "@/constants/theme";
import { i18n } from "@/i18n";
import { FC, PropsWithChildren } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

export const AuthOutlet: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <View style={[AuthOutletStyles.root]}>
      <View style={AuthOutletStyles.container}>
        <View style={AuthOutletStyles.headerWrapper}>
          <View style={AuthOutletStyles.bgImageWrapper}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={AuthOutletStyles.bgImage}
            />
          </View>
          <View style={AuthOutletStyles.titleWrapper}>
            <Typography style={AuthOutletStyles.title} fontWeight="Bold">
              {i18n.t("auth.general.title")}
            </Typography>
            <Image
              source={require("@/assets/images/logo.png")}
              style={AuthOutletStyles.titleImage}
            />
            <Typography style={AuthOutletStyles.title} fontWeight="Bold">
              {i18n.t("auth.general.welcome")}
            </Typography>
          </View>
        </View>

        {children}
      </View>
    </View>
  );
};

const AuthOutletStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: Theme.palette.background.default,
    paddingVertical: Theme.shape.spacing(4),
    paddingHorizontal: Theme.shape.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    borderRadius: Theme.shape.radius.md,
    padding: Theme.shape.spacing(4),
    backgroundColor: Theme.palette.background.paper,
    position: "relative",
  },
  headerWrapper: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-100%",
    left: 0,
    right: 0,
    margin: "auto",
  },
  bgImage: {
    width: 320,
    height: 214,
    filter: "grayScale(1)",
    opacity: 0.1,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: i18n.flexDirection,
    alignItems: "center",
    justifyContent: "center",
    gap: Theme.shape.spacing(1),
  },
  titleImage: {
    width: 76,
    height: 50,
  },
  title: {
    color: Theme.palette.text.primary,
    fontSize: Theme.typography.fontSize.sm,
  },
});
