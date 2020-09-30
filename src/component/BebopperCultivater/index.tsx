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
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootList } from "src/rounting";
// navigator

export type BottomSheetRef = MutableRefObject<BottomSheet | null>;

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: TotalInfo;
  bottomSheetRef: BottomSheetRef;
  navigation: NavigationProp;
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
  navigation: (null as unknown) as NavigationProp,
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

type NavigationProp = DrawerNavigationProp<RootList, "bebopperCultivater">;

type Props = {
  route: ScreenRouteProp;
  navigation: NavigationProp;
};

export const BebopperCultivater = (props: Props) => {
  const { navigation, route } = props;

  return (
    <Provider navigation={navigation} route={route}>
      <Container />
    </Provider>
  );
};
