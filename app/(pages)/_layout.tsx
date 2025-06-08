import { PagesHeader, PagesOutlet } from "@/components/layouts/PagesLayout";
import { Slot } from "expo-router";

export default function PagesLayout() {
  return (
    <>
      <PagesHeader />
      <PagesOutlet>
        <Slot />
      </PagesOutlet>
    </>
  );
}
