import {
  TotalInfo,
  Duration,
  NoteNumber,
  AccidentalNumber,
  Key,
} from "src/model/music/base";

import { setDurationOfTargetBar } from "src/component/BebopperCultivater/reducer/setDurationOfTargetBar";
import { reset } from "src/component/BebopperCultivater/reducer/reset";
import { setNoteNumberOfTargetNoteIndexOfTargetBar } from "src/component/BebopperCultivater/reducer/setNoteNumberOfTargetNoteIndexOfTargetBar";
import { setAccidentalOfTargetNoteIndexOfTargetBar } from "src/component/BebopperCultivater/reducer/setAccidentalOfTargetNoteIndexOfTargetBar";
import { addBar } from "src/component/BebopperCultivater/reducer/addBar";

type Selected = {
  bar: number;
} | null;

export type State = {
  totalInfo: TotalInfo | null;
  selected: Selected;
  bebopperTool: {
    show: boolean;
  };
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

type SetNoteNumberOfTargetNoteIndexOfTargetBar = {
  type: "setNoteNumberOfTargetNoteIndexOfTargetBar";
  payload: {
    noteNumber: NoteNumber;
    targetNoteIndex: number;
    targetBarIndex: number;
  };
};

type SetAccidentalOfTargetNoteIndexOfTargetBar = {
  type: "setAccidentalOfTargetNoteIndexOfTargetBar";
  payload: {
    accidentalNumber: AccidentalNumber;
    targetNoteIndex: number;
    targetBarIndex: number;
  };
};

type SelectBar = {
  type: "selectBar";
  payload: {
    targetBar: number | null;
  };
};

type ChangeKey = {
  type: "changeKey";
  payload: {
    targetKey: Key;
  };
};

type SetBebopperToolOn = {
  type: "setBebopperToolOn";
  payload: {
    on: boolean;
  };
};

export type AddBarType = "default";

type AddBar = {
  type: "addBar";
  payload: {
    addBarType: AddBarType;
    indexOfMe: number;
  };
};

export type Action =
  | TestAction
  | SetInitialFetchedData
  | SetDurationOfTargetBar
  | Reset
  | SetNoteNumberOfTargetNoteIndexOfTargetBar
  | SetAccidentalOfTargetNoteIndexOfTargetBar
  | SelectBar
  | ChangeKey
  | SetBebopperToolOn
  | AddBar;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "addBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    return {
      ...state,
      totalInfo: addBar({
        totalInfo: state.totalInfo,
        indexOfMe: action.payload.indexOfMe,
        addBarType: action.payload.addBarType,
      }),
    };
  }

  if (action.type === "setBebopperToolOn") {
    return {
      ...state,
      bebopperTool: {
        show: action.payload.on,
      },
    };
  }

  if (action.type === "changeKey") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    return {
      ...state,
      totalInfo: {
        ...state.totalInfo,
        key: action.payload.targetKey,
      },
    };
  }
  if (action.type === "selectBar") {
    const newSelected = action.payload.targetBar
      ? { bar: action.payload.targetBar }
      : null;

    return {
      ...state,
      selected: newSelected,
    };
  }

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

    return {
      ...state,
      totalInfo: res,
    };
  }

  if (action.type === "setNoteNumberOfTargetNoteIndexOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    const res = setNoteNumberOfTargetNoteIndexOfTargetBar({
      totalInfo: state.totalInfo,
      targetBarIndex: action.payload.targetBarIndex,
      targetNoteIndex: action.payload.targetNoteIndex,
      noteNumber: action.payload.noteNumber,
    });

    return {
      ...state,
      totalInfo: res,
    };
  }

  if (action.type === "setAccidentalOfTargetNoteIndexOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    const res = setAccidentalOfTargetNoteIndexOfTargetBar({
      totalInfo: state.totalInfo,
      targetBarIndex: action.payload.targetBarIndex,
      targetNoteIndex: action.payload.targetNoteIndex,
      accidentalNumber: action.payload.accidentalNumber,
    });

    return {
      ...state,
      totalInfo: res,
    };
  }

  return state;
};
