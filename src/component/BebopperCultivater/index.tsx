import React, {
  createContext,
  FC,
  useContext,
  useReducer,
  Dispatch,
} from "react";
import {
  makeReducer,
  State,
  Action,
} from "src/component/BebopperCultivater/reducer";
import { BebopperCultivater as UI } from "src/component/BebopperCultivater/UI";

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: any;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: { testValue: "init" },
  fetchedData: {},
});

export const useContextHook = () => useContext(Context);

const Provider: FC = ({ children }) => {
  // ここでフェッチする data これを value に渡す
  const [state, setState] = useReducer(makeReducer(), {
    testValue: "init",
  });

  return (
    <Context.Provider
      value={{
        setState,
        state,
        fetchedData: {},
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const BebopperCultivater = () => {
  return (
    <Provider>
      <UI />
    </Provider>
  );
};
