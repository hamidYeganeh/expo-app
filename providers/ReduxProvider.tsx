import { Store } from "@/features/redux/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const ReduxProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <Provider store={Store}>{children}</Provider>;
};
