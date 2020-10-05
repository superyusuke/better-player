import {
  TotalInfo,
  NoteNumber,
  BarListItem,
  BarMeta,
} from "src/model/music/base";

type ChangeNote = {
  indexToChange: number;
  qualityToChange: string;
  barList: BarListItem[];
};

const changeQuality = (props: ChangeNote): BarListItem[] => {
  const { qualityToChange, barList, indexToChange } = props;
  return barList.map((barListItem, index) => {
    if (index + 1 === indexToChange) {
      // chord がない時は
      if (barListItem.chord === null) {
        return {
          ...barListItem,
          chord: {
            noteNumber: null,
            quality: qualityToChange,
            accidentalNumber: 0,
          },
        };
      }

      // 既存のコードあり
      return {
        ...barListItem,
        chord: {
          ...barListItem.chord,
          quality: qualityToChange,
        },
      };
    }

    return barListItem;
  });
};

type Props = {
  targetCellIndex: number;
  quality: string;
  targetBarIndex: number;
  barMetaList: BarMeta[];
};

export const setQualityOfTargetCellOfTargetBar = (props: Props): BarMeta[] => {
  const { targetCellIndex, quality, targetBarIndex, barMetaList } = props;

  return barMetaList.map(
    (bar, index): BarMeta => {
      if (index + 1 === targetBarIndex) {
        const changedNoteList = changeQuality({
          indexToChange: targetCellIndex,
          barList: bar.list,
          qualityToChange: quality,
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
