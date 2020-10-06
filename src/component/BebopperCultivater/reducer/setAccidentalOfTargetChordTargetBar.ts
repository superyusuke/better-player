import { AccidentalNumber, BarListItem, BarMeta } from "src/model/music/base";

type ChangeNote = {
  indexToChange: number;
  accidentalNumberToChange: AccidentalNumber;
  barList: BarListItem[];
};

const changeAccidentalNumber = (props: ChangeNote): BarListItem[] => {
  const { accidentalNumberToChange, barList, indexToChange } = props;
  return barList.map((barListItem, index) => {
    if (index + 1 === indexToChange) {
      // barListItem 情報が null の場合
      if (barListItem.chord === null) {
        return {
          note: null,
          chord: {
            noteNumber: null,
            quality: null,
            accidentalNumber: accidentalNumberToChange,
          },
        };
      }

      // 既存の barListItem 情報が存在する場合
      return {
        ...barListItem,
        chord: {
          ...barListItem.chord,
          accidentalNumber: accidentalNumberToChange,
        },
      };
    }

    return barListItem;
  });
};

type Props = {
  targetCellIndex: number;
  accidentalNumber: AccidentalNumber;
  targetBarIndex: number;
  barMetaList: BarMeta[];
};

export const setAccidentalOfTargetChordTargetBar = (
  props: Props
): BarMeta[] => {
  const {
    targetCellIndex,
    barMetaList,
    accidentalNumber,
    targetBarIndex,
  } = props;

  return barMetaList.map(
    (bar, index): BarMeta => {
      if (index + 1 === targetBarIndex) {
        const changedNoteList = changeAccidentalNumber({
          indexToChange: targetCellIndex,
          barList: bar.list,
          accidentalNumberToChange: accidentalNumber,
        });

        console.log(changedNoteList, "list");

        return {
          ...bar,
          list: changedNoteList,
        };
      }

      return bar;
    }
  );
};
