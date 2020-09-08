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
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: { testValue: "init" },
});

export const useContextHook = () => useContext(Context);

const Provider: FC = ({ children }) => {
  const [state, setState] = useReducer(makeReducer(), {
    testValue: "init",
  });

  return (
    <Context.Provider
      value={{
        setState,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const BebopperCultivater = () => {
  //　ここでデータを取得する

  return (
    <Provider>
      <UI />
    </Provider>
  );
};
