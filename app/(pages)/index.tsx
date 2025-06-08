import { Link } from "expo-router";
import { View } from "react-native";

export default function HomePage() {
  return (
    <View>
      <Link href={"/home"}>Go to Login</Link>
      <Link href={"/calendar"}>Go to Calendar</Link>
      <Link href={"/auth/login"}>Go to Login</Link>
    </View>
  );
}
