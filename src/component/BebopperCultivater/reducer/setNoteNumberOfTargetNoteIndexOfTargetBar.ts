import {
  TotalInfo,
  NoteNumber,
  BarListItem,
  BarMeta,
} from "src/model/music/base";

type ChangeNote = {
  indexToChange: number;
  noteNumberToChange: NoteNumber;
  barList: BarListItem[];
};

const changeNote = (props: ChangeNote): BarListItem[] => {
  const { noteNumberToChange, barList, indexToChange } = props;
  return barList.map((barListItem, index) => {
    if (index + 1 === indexToChange) {
      // note 情報が null の場合
      if (barListItem.note === null) {
        return {
          note: {
            octaveNumber: 0,
            accidentalNumber: 0,
            noteNumber: noteNumberToChange,
          },
          chord: {
            quality: barListItem.chord?.quality ?? "",
            accidentalNumber: barListItem.chord?.accidentalNumber ?? 0,
            noteNumber: barListItem.chord?.noteNumber ?? null,
          },
        };
      }

      // 既存の note 情報が存在する場合
      return {
        ...barListItem,
        note: {
          ...barListItem.note,
          noteNumber: noteNumberToChange,
        },
      };
    }

    return barListItem;
  });

  // if (index + 1 === indexToChange) {
  //   // note 情報が null の場合
  //   if (barListItem.note === null) {
  //     return barListItem
  //
  //     return {
  //       octaveNumber: 0,
  //       accidentalNumber: 0,
  //       noteNumber: noteNumberToChange,
  //     };
  //   }
  //
  //   // 既存の note 情報が存在する場合
  //   return {
  //     ...barListItem.note,
  //     noteNumber: noteNumberToChange,
  //   };
  // }
  //
  // return barListItem.note;
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
    barMetaList: totalInfo.barMetaList.map(
      (bar, index): BarMeta => {
        if (index + 1 === targetBarIndex) {
          const changedNoteList = changeNote({
            indexToChange: targetNoteIndex,
            barList: bar.list,
            noteNumberToChange: noteNumber,
          });

          return {
            ...bar,
            list: changedNoteList,
          };
        }

        return bar;
      }
    ),
  };
};
