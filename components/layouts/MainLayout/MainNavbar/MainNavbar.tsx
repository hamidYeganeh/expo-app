import { NavbarVertical } from "@/components/kit";
import { NavbarVerticalItem } from "@/components/kit/Navbar/Vertical";

export const MainNavbar = () => {
  return (
    <NavbarVertical>
      <NavbarVerticalItem
        icon={"home"}
        title="خانه"
        path="/home"
      ></NavbarVerticalItem>
    </NavbarVertical>
  );
};
