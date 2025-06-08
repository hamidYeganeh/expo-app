import { Calendar, Icon } from "@/components/kit";
import { View } from "react-native";

export default function CalendarPage() {
  return (
    <View>
      <Icon name="chevron.right" size={48} />
      <Calendar />
    </View>
  );
}
