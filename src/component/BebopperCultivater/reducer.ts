import { TotalInfo } from "src/model/music/base";

export type State = {
  totalInfo: TotalInfo | null;
};

type TestAction = {
  type: "test";
  payload: string;
};

type SetInitialFetchedData = {
  type: "setInitialFetchedData";
  payload: TotalInfo;
};

export type Action = TestAction | SetInitialFetchedData;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "setInitialFetchedData") {
    return {
      ...state,
      totalInfo: action.payload,
    };
  }
  return state;
};
