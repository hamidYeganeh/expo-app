import { TextField } from "@/components/kit";
import { TextFieldProps } from "@/components/kit/TextField";
import { useField } from "formik";
import { FC } from "react";

interface FormikTextFieldProps
  extends Exclude<TextFieldProps, "value" | "onChangeText"> {
  name: string;
}

export const FormikTextField: FC<FormikTextFieldProps> = (props) => {
  const { name, onChange, ...otherProps } = props;

  const [field, meta, helper] = useField(name);

  return (
    <TextField
      onChangeText={(newText) => helper.setValue(newText)}
      defaultValue={field.value}
      {...otherProps}
    />
  );
};
