import {
  createContext,
  FC,
  useReducer,
  ReducerAction,
  Reducer,
  useContext,
  useEffect,
} from "react";
import { Dimensions, View } from "react-native";
import { ITabsContext, ITabsValue, TabsProps } from "./Tab.types";
import { StyleSheet } from "react-native";
import { i18n } from "@/i18n";
import { Theme } from "@/constants/theme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ITabsContextState extends Pick<ITabsContext, "value"> {}

type ITabsAction = {
  type: "CHANGE_TAB";
  payload: ITabsContextState;
};

const initialState: ITabsContextState = {
  value: 0,
};

const TabsContext = createContext<ITabsContext>({
  ...initialState,
  onChangeTab: () => {},
});

function reducer(state: ITabsContextState, action: ITabsAction) {
  switch (action.type) {
    case "CHANGE_TAB":
      return { ...state, value: action.payload.value };

    default:
      return state;
  }
}

const { width } = Dimensions.get("window");

const Tabs: FC<TabsProps> = (props) => {
  const { children, onChangeTab, value } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  // @ts-ignore
  const tabsLength = children!.length as number;
  const tabWidth = width / tabsLength;
  const activeIndex = value as number;
  const translateX = useSharedValue(activeIndex * tabWidth);

  function handleChangeTab(tab: ITabsValue) {
    dispatch({ type: "CHANGE_TAB", payload: { value: tab } });
    onChangeTab(tab);
  }

  useEffect(() => {
    translateX.value = withTiming(activeIndex * tabWidth, { duration: 300 });
  }, [activeIndex]);

  console.log(activeIndex * tabWidth);

  const animatedGliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -translateX.value }],
  }));

  return (
    <TabsContext.Provider
      value={{
        // value: state.value,
        value,
        onChangeTab: handleChangeTab,
      }}
    >
      <View style={[TabsStyles.root]}>
        <>
          {children}
          {/* <Animated.View
            style={[
              {
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: tabWidth,
                // paddingHorizontal: Theme.shape.spacing(3),
                // paddingVertical: Theme.shape.spacing(2),
                // padding: Theme.shape.spacing(2),
              },
            ]}
          >
            <View
              style={[
                animatedGliderStyle,
                {
                  backgroundColor: "blue",
                  width: tabWidth - 16,
                  height: "100%",
                },
              ]}
            ></View>
          </Animated.View> */}
        </>
      </View>
    </TabsContext.Provider>
  );
};

export function useTabs() {
  const context = useContext(TabsContext);

  if (!context)
    throw new Error("useTabs must be inside of TabsProvider Context");

  return context;
}
export default Tabs;

const TabsStyles = StyleSheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: i18n.flexDirection,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Theme.shape.spacing(2),
    padding: Theme.shape.spacing(1),
    position: "relative",
  },
});
