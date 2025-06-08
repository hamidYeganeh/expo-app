import {
  Dispatch,
  DispatchWithoutAction,
  PropsWithChildren,
  SetStateAction,
} from "react";

export interface TabProps
  extends PropsWithChildren,
    Pick<ITabsContext, "value"> {
  fullWidth?: boolean;
}

export interface TabsProps
  extends PropsWithChildren,
    Pick<ITabsContext, "value" | "onChangeTab"> {}

export type ITabsValue = string | number;
export interface ITabsContext {
  value: ITabsValue;
  onChangeTab: (tab: ITabsValue) => void;
  // onChangeTab: SetStateAction<ITabsValue>;
}
