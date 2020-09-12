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

type BottomSheetRef = MutableRefObject<BottomSheet | null>;

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: TotalInfo;
  bottomSheetRef: BottomSheetRef;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    totalInfo: null,
  },
  fetchedData: info,
  bottomSheetRef: (null as unknown) as BottomSheetRef,
});

export const useContextHook = () => useContext(Context);

const Provider: FC = ({ children }) => {
  const fetchedData = info;

  const bottomSheetRef = React.useRef<BottomSheet | null>(null);

  const [state, setState] = useReducer(makeReducer(), {
    totalInfo: null,
  });

  return fetchedData ? (
    <Context.Provider
      value={{
        setState,
        state,
        fetchedData,
        bottomSheetRef,
      }}
    >
      {children}
    </Context.Provider>
  ) : null;
};

export const BebopperCultivater = () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};
