import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { TabProps } from "./Tab.types";
import { Theme } from "@/constants/theme";
import { Typography } from "../Typography";
import { useTabs } from "./Tabs";

const Tab: FC<TabProps> = (props) => {
  const { children, value, fullWidth = false } = props;
  const { value: tabsValue, onChangeTab } = useTabs();

  const isActive = tabsValue === value;

  return (
    <>
      <Pressable
        style={[
          TabStyles.root,
          fullWidth && TabStyles.fullWidth,
          isActive && TabStyles.rootActive,
        ]}
        onPress={() => {
          onChangeTab(value);
        }}
      >
        <Typography style={[TabStyles.text, isActive && TabStyles.textActive]}>
          {children}
        </Typography>
      </Pressable>
    </>
  );
};

export default Tab;

const TabStyles = StyleSheet.create({
  root: {
    height: "100%",
    paddingHorizontal: Theme.shape.spacing(3),
    paddingVertical: Theme.shape.spacing(2),
    backgroundColor: "transparent",
    color: Theme.palette.text.disabled,
    borderRadius: Theme.shape.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    transitionDuration: Theme.transitions.durations.md,
  },
  rootActive: {
    backgroundColor: Theme.palette.primary.lighter,
    color: Theme.palette.primary.main,
  },
  text: {
    color: Theme.palette.primary.main,
    fontSize: Theme.typography.fontSize.sm,
    fontWeight: "600",
    fontFamily: Theme.typography.fontFamily.yekanBakh.semiBold,
  },
  textActive: {
    fontWeight: "700",
    fontFamily: Theme.typography.fontFamily.yekanBakh.bold,
  },
  fullWidth: { flex: 1 },
});
