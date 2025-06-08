import { ILoginPayload } from "@/types/auth.types";

export function prepareDataForLogin(values: ILoginPayload) {
  return {
    username: values.username,
    password: values.password,
  };
}
