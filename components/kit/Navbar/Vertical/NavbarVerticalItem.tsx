import { NAVBAR } from "@/configs/layouts.config";
import { Theme } from "@/constants/theme";
import { i18n } from "@/i18n";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FC, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavbarItemProps } from "./Navbar.types";
import { NavbarVerticalSubItem } from "./NavbarVerticalSubItem";
import { useAppSelector } from "@/hooks";
import { Link, usePathname, useRouter } from "expo-router";
import { getActive } from "@/utils/router";

export const NavbarVerticalItem: FC<NavbarItemProps> = (props) => {
  const { children, path } = props;

  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const hasChildren = children!?.length > 0;
  const isActive = hasChildren ? true : getActive(pathname, path as string);

  return (
    <>
      {hasChildren ? (
        <Pressable
          onPress={() => {
            setOpen(!isOpen);
          }}
          style={[
            NavbarVerticalItemStyles.root,
            isActive && NavbarVerticalItemStyles.rootActive,
          ]}
        >
          {({ hovered }) => (
            <NavbarVerticalItemRoot
              hovered={hovered}
              isActive={isActive}
              {...props}
            />
          )}
        </Pressable>
      ) : (
        <Link href={path!} style={[NavbarVerticalItemStyles.rootLink]}>
          <Pressable
            style={[
              NavbarVerticalItemStyles.root,
              isActive && NavbarVerticalItemStyles.rootActive,
            ]}
          >
            {({ hovered }) => (
              <NavbarVerticalItemRoot
                hovered={hovered}
                isActive={isActive}
                {...props}
              />
            )}
          </Pressable>
        </Link>
      )}
      {hasChildren && isActive && (
        <View
          style={[
            NavbarVerticalItemStyles.subItemsWrapper,
            !isActive && NavbarVerticalItemStyles.subItemsWrapperCollapsed,
          ]}
        >
          {children?.map((subItem, subItemIndex) => (
            <NavbarVerticalSubItem
              key={subItemIndex}
              title={subItem?.title || "-"}
              path={subItem?.path}
            />
          ))}
        </View>
      )}
    </>
  );
};

const NavbarVerticalItemRoot: FC<
  NavbarItemProps & { hovered: boolean; isActive: boolean }
> = (props) => {
  const { icon, title, children, hovered, isActive } = props;

  const { isCollapsed: isNavbarCollapsed } = useAppSelector(
    (state) => state.pagesLayout
  );

  const hasChildren = children!?.length > 0;

  return (
    <>
      <View style={[NavbarVerticalItemStyles.iconWrapper]}>
        <MaterialIcons
          name={icon as any}
          color={Theme.palette.text.light}
          style={[
            NavbarVerticalItemStyles.icon,
            isActive && NavbarVerticalItemStyles.iconActive,
            !isActive && hovered && NavbarVerticalItemStyles.iconHovered,
          ]}
        />
      </View>

      <Text
        style={[
          NavbarVerticalItemStyles.title,
          isActive && NavbarVerticalItemStyles.titleActive,
          !isActive && hovered && NavbarVerticalItemStyles.titleHovered,
          isNavbarCollapsed && NavbarVerticalItemStyles.titleCollapsed,
        ]}
      >
        {title}
      </Text>

      {hasChildren && (
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={Theme.palette.text.light}
          style={[
            NavbarVerticalItemStyles.arrowIcon,
            isActive && NavbarVerticalItemStyles.arrowIconActive,
            isNavbarCollapsed && NavbarVerticalItemStyles.arrowCollapsed,
          ]}
        />
      )}
    </>
  );
};

const NavbarVerticalItemStyles = StyleSheet.create({
  root: {
    width: "100%",
    borderRadius: Theme.shape.radius.md,
    paddingVertical: Theme.shape.spacing(4),
    paddingHorizontal: Theme.shape.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: i18n.flexDirection,
    gap: Theme.shape.spacing(4),
    userSelect: "none",
    transitionDuration: Theme.transitions.durations.sm,
  },
  rootLink: {
    width: "100%",
    height: "auto",
  },
  rootActive: {
    backgroundColor: Theme.palette.primary.lighter,
  },
  iconWrapper: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: Theme.palette.gray.dark,
    fontSize: NAVBAR.MAIN_LAYOUT_NAVBAR_WIDTH_DESKTOP_ICON,
    transitionDuration: Theme.transitions.durations.sm,
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  iconActive: {
    color: Theme.palette.primary.main,
  },
  iconHovered: {
    color: Theme.palette.gray.darker,
  },
  title: {
    flex: 1,
    fontSize: Theme.typography.fontSize.md,
    fontWeight: "600",
    color: Theme.palette.gray.dark,
    transitionDuration: Theme.transitions.durations.sm,
    textAlign: "right",
  },
  titleActive: {
    color: Theme.palette.primary.main,
  },
  titleCollapsed: {
    display: "none",
    transitionDuration: Theme.transitions.durations.sm,
  },
  titleHovered: {
    color: Theme.palette.gray.darker,
  },
  arrowIcon: {
    width: NAVBAR.MAIN_LAYOUT_NAVBAR_WIDTH_DESKTOP_ICON,
    height: NAVBAR.MAIN_LAYOUT_NAVBAR_WIDTH_DESKTOP_ICON,
    color: Theme.palette.gray.dark,
    transform: "rotate(-90deg)",
    transitionDuration: Theme.transitions.durations.md,
  },
  arrowIconActive: {
    color: Theme.palette.primary.main,
    transform: "rotate(90deg)",
  },
  arrowCollapsed: {
    display: "none",
  },
  subItemsWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: Theme.shape.spacing(1),
    transitionDuration: Theme.transitions.durations.sm,
  },
  subItemsWrapperCollapsed: {},
});
