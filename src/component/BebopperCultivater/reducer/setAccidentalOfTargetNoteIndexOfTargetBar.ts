import {
  TotalInfo,
  NoteMetaList,
  AccidentalNumber,
} from "src/model/music/base";

type ChangeNote = {
  indexToChange: number;
  accidentalNumberToChange: AccidentalNumber;
  noteList: NoteMetaList;
};

const changeAccidentalNumber = (props: ChangeNote): NoteMetaList => {
  const { accidentalNumberToChange, noteList, indexToChange } = props;
  return noteList.map((note, index) => {
    if (index + 1 === indexToChange) {
      // note 情報が null の場合
      if (note === null) {
        return null;
      }

      // 既存の note 情報が存在する場合
      return {
        ...note,
        accidentalNumber: accidentalNumberToChange,
      };
    }

    return note;
  });
};

type Props = {
  totalInfo: TotalInfo;
  targetBarIndex: number;
  targetNoteIndex: number;
  accidentalNumber: AccidentalNumber;
};

export const setAccidentalOfTargetNoteIndexOfTargetBar = (
  props: Props
): TotalInfo => {
  const {
    totalInfo,
    accidentalNumber,
    targetBarIndex,
    targetNoteIndex,
  } = props;

  return {
    ...totalInfo,
    barMetaList: totalInfo.barMetaList.map((bar, index) => {
      if (index + 1 === targetBarIndex) {
        return {
          ...bar,
          noteList: changeAccidentalNumber({
            indexToChange: targetNoteIndex,
            noteList: bar.noteList,
            accidentalNumberToChange: accidentalNumber,
          }),
        };
      }

      return bar;
    }),
  };
};
