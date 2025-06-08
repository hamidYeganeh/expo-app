import { MainOutlet } from "@/components/layouts/MainLayout";
import { Slot } from "expo-router";

export default function MainLayout() {
  return (
    <MainOutlet>
      <Slot />
    </MainOutlet>
  );
}
