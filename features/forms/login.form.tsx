import { FormikButton, FormikTextField } from "@/components/common/Formik";
import { Theme } from "@/constants/theme";
import { i18n } from "@/i18n";
import { ILoginPayload } from "@/types/auth.types";
import { Formik } from "formik";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

interface LoginFormProps {
  initialValues: ILoginPayload;
  onSubmit: (values: ILoginPayload) => void;
  isLoading: boolean;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { initialValues, onSubmit } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <View style={LoginFormStyles.root}>
        <FormikTextField name="username" textContentType="username" />
        <FormikTextField name="password" textContentType="password" />
        <FormikButton>{i18n.t("auth.login.form.login")}</FormikButton>
      </View>
    </Formik>
  );
};

const LoginFormStyles = StyleSheet.create({
  root: {
    width: "100%",
    maxWidth: Theme.shape.maxWidth.xs,
    marginHorizontal: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: Theme.shape.spacing(2),
  },
});
