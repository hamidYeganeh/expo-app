import { Button } from "@/components/kit";
import { ButtonProps } from "@/components/kit/Button";
import { useFormikContext } from "formik";
import { FC } from "react";

export const FormikButton: FC<ButtonProps> = (props) => {
  const { children, loading, ...otherProps } = props;

  const { isSubmitting, handleSubmit } = useFormikContext();

  return (
    <Button
      onPress={() => handleSubmit()}
      loading={isSubmitting || loading}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
