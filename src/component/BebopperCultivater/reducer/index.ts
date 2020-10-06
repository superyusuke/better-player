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
import { setNumeralOfTargetCellOfTargetBar } from "src/component/BebopperCultivater/reducer/setNumeralOfTargetCellOfTargetBar";
import { setQualityOfTargetCellOfTargetBar } from "src/component/BebopperCultivater/reducer/setQualityOfTargetCellOfTargetBar";
import { setAccidentalOfTargetChordTargetBar } from "src/component/BebopperCultivater/reducer/setAccidentalOfTargetChordTargetBar";
import { addBar } from "src/component/BebopperCultivater/reducer/addBar";
import { deleteBar } from "src/component/BebopperCultivater/reducer/deleteBar";

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

export type AddBarType = "default" | "insert";

type AddBar = {
  type: "addBar";
  payload: {
    addBarType: AddBarType;
    indexOfMe: number;
  };
};

export type DeleteBarType = "me";

type DeleteBar = {
  type: "deleteBar";
  payload: {
    deleteBarType: "me";
    indexOfMe: number;
  };
};

type SetNumeralOfTargetCellOfTargetBar = {
  type: "setNumeralOfTargetCellOfTargetBar";
  payload: {
    numeral: NoteNumber;
    targetCellIndex: number;
    targetBarIndex: number;
  };
};

type SetQualityOfTargetCellOfTargetBar = {
  type: "setQualityOfTargetCellOfTargetBar";
  payload: {
    quality: string;
    targetCellIndex: number;
    targetBarIndex: number;
  };
};

type SetAccidentalOfTargetChordOfTargetBar = {
  type: "setAccidentalOfTargetChordIndexOfTargetBar";
  payload: {
    accidentalNumber: AccidentalNumber;
    targetCellIndex: number;
    targetBarIndex: number;
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
  | AddBar
  | DeleteBar
  | SetNumeralOfTargetCellOfTargetBar
  | SetQualityOfTargetCellOfTargetBar
  | SetAccidentalOfTargetChordOfTargetBar;

export const makeReducer = () => (state: State, action: Action): State => {
  console.log(action.type, "action");

  if (action.type === "setAccidentalOfTargetChordIndexOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    const {
      accidentalNumber,
      targetBarIndex,
      targetCellIndex,
    } = action.payload;

    return {
      ...state,
      totalInfo: {
        ...state.totalInfo,
        barMetaList: setAccidentalOfTargetChordTargetBar({
          accidentalNumber,
          barMetaList: state.totalInfo.barMetaList,
          targetBarIndex,
          targetCellIndex,
        }),
      },
    };
  }

  if (action.type === "setQualityOfTargetCellOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    const { targetCellIndex, quality, targetBarIndex } = action.payload;

    return {
      ...state,
      totalInfo: {
        ...state.totalInfo,
        barMetaList: setQualityOfTargetCellOfTargetBar({
          quality,
          barMetaList: state.totalInfo.barMetaList,
          targetBarIndex,
          targetCellIndex,
        }),
      },
    };
  }

  if (action.type === "setNumeralOfTargetCellOfTargetBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    const { targetCellIndex, numeral, targetBarIndex } = action.payload;

    return {
      ...state,
      totalInfo: {
        ...state.totalInfo,
        barMetaList: setNumeralOfTargetCellOfTargetBar({
          barMetaList: state.totalInfo.barMetaList,
          targetBarIndex,
          numeral,
          targetCellIndex,
        }),
      },
    };
  }

  if (action.type === "deleteBar") {
    if (!state.totalInfo) {
      return {
        ...state,
      };
    }

    return {
      ...state,
      totalInfo: deleteBar({
        indexOfMe: action.payload.indexOfMe,
        totalInfo: state.totalInfo,
        deleteBarType: action.payload.deleteBarType,
      }),
    };
  }

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
