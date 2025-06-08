// lib
import { Slot } from "expo-router";
// components
import { AuthOutlet } from "@/components/layouts/AuthLayout";

export default function AuthLayout() {
  return (
    <AuthOutlet>
      <Slot />
    </AuthOutlet>
  );
}
