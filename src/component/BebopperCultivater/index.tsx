import React, {
  createContext,
  FC,
  useContext,
  useReducer,
  Dispatch,
  MutableRefObject,
} from "react";

import { TotalInfo } from "src/model/music/base";

import {
  makeReducer,
  State,
  Action,
} from "src/component/BebopperCultivater/reducer";

import { Container } from "src/component/BebopperCultivater/Container";
import { info } from "src/component/BebopperCultivater/dummyData";
import BottomSheet from "reanimated-bottom-sheet";

// navigator
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootList } from "src/rounting";
// navigator

type BottomSheetRef = MutableRefObject<BottomSheet | null>;

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: TotalInfo;
  bottomSheetRef: BottomSheetRef;
  navigation: ScreenNavigationProp;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    totalInfo: null,
    selected: null,
    bebopperTool: {
      show: false,
    },
  },
  fetchedData: info,
  bottomSheetRef: (null as unknown) as BottomSheetRef,
  navigation: (null as unknown) as ScreenNavigationProp,
});

export const useContextHook = () => useContext(Context);

const Provider: FC<Props> = ({ children, route, navigation }) => {
  const fetchedData = info;

  const bottomSheetRef = React.useRef<BottomSheet | null>(null);

  const [state, setState] = useReducer(makeReducer(), {
    totalInfo: null,
    selected: null,
    bebopperTool: {
      show: false,
    },
  });

  return fetchedData ? (
    <Context.Provider
      value={{
        setState,
        state,
        fetchedData,
        bottomSheetRef,
        navigation,
      }}
    >
      {children}
    </Context.Provider>
  ) : null;
};

type ScreenRouteProp = RouteProp<RootList, "bebopperCultivater">;

type ScreenNavigationProp = StackNavigationProp<RootList, "bebopperCultivater">;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

export const BebopperCultivater = (props: Props) => {
  const { navigation, route } = props;

  return (
    <Provider navigation={navigation} route={route}>
      <Container />
    </Provider>
  );
};
