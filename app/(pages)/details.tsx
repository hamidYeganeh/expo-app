import { PagesOutlet } from "@/components/layouts/PagesLayout";
import {
  FlatListComponent,
  Platform,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function LoginPage() {
  return (
    <>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "yellow",
          }}
        >
          {"Details pages page"}
        </View>
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "yellow",
          }}
        >
          {"Details pages page"}
        </View>
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "yellow",
          }}
        >
          {"Details pages page"}
        </View>
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "yellow",
          }}
        >
          {"Details pages page"}
        </View>
      </ScrollView>
    </>
  );
}
