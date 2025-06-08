import { Button, TextField } from "@/components/kit";
import { TouchableHighlight, View } from "react-native";

export default function HomePage() {
  return (
    <View
      // @ts-ignore
      style={{
        flexDirection: "column",
        gap: "24px",
        maxWidth: "150px",
        margin: "0 auto",
      }}
    >
      <Button variant="contained">{"Hello"}</Button>
    </View>
  );
}
