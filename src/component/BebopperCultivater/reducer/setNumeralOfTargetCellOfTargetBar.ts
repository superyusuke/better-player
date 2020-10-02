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
      // chord がない時は
      if (barListItem.chord === null) {
        return {
          ...barListItem,
          chord: {
            noteNumber: noteNumberToChange,
            quality: "",
            accidentalNumber: 0,
          },
        };
      }

      // 既存のコードあり
      return {
        ...barListItem,
        chord: {
          ...barListItem.chord,
          noteNumber: noteNumberToChange,
        },
      };
    }

    return barListItem;
  });
};

type Props = {
  targetCellIndex: number;
  numeral: NoteNumber;
  targetBarIndex: number;
  barMetaList: BarMeta[];
};

export const setNumeralOfTargetCellOfTargetBar = (props: Props): BarMeta[] => {
  const { targetCellIndex, numeral, targetBarIndex, barMetaList } = props;

  return barMetaList.map(
    (bar, index): BarMeta => {
      if (index + 1 === targetBarIndex) {
        const changedNoteList = changeNote({
          indexToChange: targetCellIndex,
          barList: bar.list,
          noteNumberToChange: numeral,
        });

        return {
          ...bar,
          list: changedNoteList,
        };
      }

      return bar;
    }
  );
};
