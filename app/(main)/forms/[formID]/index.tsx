import { useGlobalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function FormsPage() {
  const { formID } = useGlobalSearchParams();

  console.log({ formID });

  return (
    <>
      <Text>{formID}</Text>
    </>
  );
}
