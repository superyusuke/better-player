import { TotalInfo, Duration } from "src/model/music/base";

import { setDurationOfTargetBar } from "src/component/BebopperCultivater/reducer/setDurationOfTargetBar";
import { reset } from "src/component/BebopperCultivater/reducer/reset";

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

type SetDurationOfTargetBar = {
  type: "setDurationOfTargetBar";
  payload: {
    targetBar: number;
    duration: Duration;
  };
};

type Reset = {
  type: "reset";
};

export type Action =
  | TestAction
  | SetInitialFetchedData
  | SetDurationOfTargetBar
  | Reset;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "setInitialFetchedData") {
    return {
      ...state,
      totalInfo: action.payload,
    };
  }

  if (action.type === "setDurationOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    return {
      ...state,
      totalInfo: setDurationOfTargetBar({
        totalInfo: state.totalInfo,
        targetBar: action.payload.targetBar,
        duration: action.payload.duration,
      }),
    };
  }

  if (action.type === "reset") {
    const res = reset({});

    return { totalInfo: res };
  }

  return state;
};
