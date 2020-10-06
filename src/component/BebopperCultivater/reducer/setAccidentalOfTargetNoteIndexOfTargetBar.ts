import { TotalInfo, AccidentalNumber, BarListItem } from "src/model/music/base";

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
      if (barListItem.note === null) {
        return {
          note: null,
          chord: null,
        };
      }

      // 既存の barListItem 情報が存在する場合
      const newBarList = {
        ...barListItem,
        note: {
          ...barListItem.note,
          accidentalNumber: accidentalNumberToChange,
        },
      };

      console.log(newBarList, "new");

      return newBarList;
    }

    return barListItem;
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
          barListItemList: changeAccidentalNumber({
            indexToChange: targetNoteIndex,
            barList: bar.list,
            accidentalNumberToChange: accidentalNumber,
          }),
        };
      }

      return bar;
    }),
  };
};
