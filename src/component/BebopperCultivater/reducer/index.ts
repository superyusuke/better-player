import {
  TotalInfo,
  Duration,
  NoteNumber,
  AccidentalNumber,
} from "src/model/music/base";

import { setDurationOfTargetBar } from "src/component/BebopperCultivater/reducer/setDurationOfTargetBar";
import { reset } from "src/component/BebopperCultivater/reducer/reset";
import { setNoteNumberOfTargetNoteIndexOfTargetBar } from "src/component/BebopperCultivater/reducer/setNoteNumberOfTargetNoteIndexOfTargetBar";
import { setAccidentalOfTargetNoteIndexOfTargetBar } from "src/component/BebopperCultivater/reducer/setAccidentalOfTargetNoteIndexOfTargetBar";
import React from "react";

import BottomSheetBehavior from "reanimated-bottom-sheet";

type Selected = {
  bar: number;
} | null;

export type State = {
  totalInfo: TotalInfo | null;
  selected: Selected;
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
    targetBar: number;
  };
};

export type Action =
  | TestAction
  | SetInitialFetchedData
  | SetDurationOfTargetBar
  | Reset
  | SetNoteNumberOfTargetNoteIndexOfTargetBar
  | SetAccidentalOfTargetNoteIndexOfTargetBar
  | SelectBar;

type Props = {
  bottomSheetRef: React.MutableRefObject<BottomSheetBehavior | null>;
};

export const makeReducer = (props: Props) => (
  state: State,
  action: Action
): State => {
  const { bottomSheetRef } = props;

  if (action.type === "selectBar") {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapTo(1);
      return {
        ...state,
        selected: {
          ...state.selected,
          bar: action.payload.targetBar,
        },
      };
    }
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
