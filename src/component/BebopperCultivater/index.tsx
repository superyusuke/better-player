import React, {
  createContext,
  FC,
  useContext,
  useReducer,
  Dispatch,
} from "react";

import { TotalInfo } from "src/model/music/base";

import {
  makeReducer,
  State,
  Action,
} from "src/component/BebopperCultivater/reducer";

import { Container } from "src/component/BebopperCultivater/Container";
import { info } from "src/component/BebopperCultivater/dummyData";

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: TotalInfo;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    totalInfo: null,
  },
  fetchedData: info,
});

export const useContextHook = () => useContext(Context);

const Provider: FC = ({ children }) => {
  const fetchedData = info;

  const [state, setState] = useReducer(makeReducer(), {
    totalInfo: null,
  });

  return fetchedData ? (
    <Context.Provider
      value={{
        setState,
        state,
        fetchedData,
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
