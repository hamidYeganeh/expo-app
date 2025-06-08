import { Theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { IconButton } from "../../IconButton";
import { toggleNavbarCollapse } from "@/features/redux/reducers/pagesLayout.reducer";
import { useAppDispatch } from "@/hooks";

export const NavbarVerticalCollapse = () => {
  function handleToggleNavbar() {}

  return (
    <View>
      <IconButton
        variant="text"
        size="md"
        color="gray"
        onPress={handleToggleNavbar}
      >
        <MaterialIcons
          name="menu-open"
          size={24}
          color={Theme.palette.text.primary}
        />
      </IconButton>
    </View>
  );
};
