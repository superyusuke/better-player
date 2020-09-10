import { TotalInfo, NoteNumber, NoteMetaList } from "src/model/music/base";

type ChangeNote = {
  indexToChange: number;
  noteNumberToChange: NoteNumber;
  noteList: NoteMetaList;
};

const changeNote = (props: ChangeNote): NoteMetaList => {
  const { noteNumberToChange, noteList, indexToChange } = props;
  return noteList.map((note, index) => {
    if (index + 1 === indexToChange) {
      // note 情報が null の場合
      if (note === null) {
        return {
          octaveNumber: 0,
          accidentalNumber: 0,
          noteNumber: noteNumberToChange,
        };
      }

      // 既存の note 情報が存在する場合
      return {
        ...note,
        noteNumber: noteNumberToChange,
      };
    }

    return note;
  });
};

type Props = {
  totalInfo: TotalInfo;
  targetBarIndex: number;
  targetNoteIndex: number;
  noteNumber: NoteNumber;
};

export const setNoteNumberOfTargetNoteIndexOfTargetBar = (
  props: Props
): TotalInfo => {
  const { totalInfo, noteNumber, targetBarIndex, targetNoteIndex } = props;

  return {
    ...totalInfo,
    barMetaList: totalInfo.barMetaList.map((bar, index) => {
      if (index + 1 === targetBarIndex) {
        return {
          ...bar,
          noteList: changeNote({
            indexToChange: targetNoteIndex,
            noteList: bar.noteList,
            noteNumberToChange: noteNumber,
          }),
        };
      }

      return bar;
    }),
  };
};
