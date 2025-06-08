import { Tab, Tabs } from "@/components/kit";
import { LoginForm } from "@/features/forms";
import { useLoginMutation } from "@/features/redux/services/auth.service";
import { prepareDataForLogin } from "@/helpers/auth.helpers";
import { ILoginPayload } from "@/types/auth.types";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";

const initialValues: ILoginPayload = {
  username: "",
  password: "",
};

export default function LoginPage() {
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [activeTab, setActiveTab] = useState<number | string>(0);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  async function handleLogin(values: ILoginPayload) {
    try {
      const body = prepareDataForLogin(values);
      // await login(body).unwrap();
    } catch (error) {}
  }

  return (
    <>
      <Stack.Screen options={{ animation: "fade", title: "HELLO" }} />

      <Tabs
        value={activeTab}
        onChangeTab={(newTab) => {
          setActiveTab(newTab);
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Tab key={index} value={index}>
            {index * 222222}
          </Tab>
        ))}
      </Tabs>

      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

      <LoginForm
        initialValues={initialValues}
        onSubmit={handleLogin}
        isLoading={isLoginLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
