import { TotalInfo, Duration, BarListItem } from "src/model/music/base";

type DurationToBlockNumber = {
  duration: Duration;
};
const durationToBlockNumber = (props: DurationToBlockNumber) => {
  const { duration } = props;

  switch (duration) {
    case 4: {
      return 1;
    }
    case 6: {
      return 3;
    }
    case 8: {
      return 2;
    }
    case 16: {
      return 4;
    }
  }
};

type AddLackingArray = {
  duration: Duration;
  // fixme 使ってないので適当
  noteList: any;
};

// 長かったり少なかったら修正するようにしないといけない。
const lengthDifference = (props: AddLackingArray): number => {
  const { duration, noteList } = props;

  const length = noteList.length;

  const appropriateLength = durationToBlockNumber({ duration });

  return appropriateLength - length;
};

type MakeAppropriateArray = {
  duration: Duration;
};

const makeAppropriateArray = (props: MakeAppropriateArray): BarListItem[] => {
  const { duration } = props;

  return Array.from({ length: durationToBlockNumber({ duration }) }, () => ({
    note: null,
    chord: null,
  }));
};

type Props = {
  totalInfo: TotalInfo;
  targetBar: number;
  duration: Duration;
};

export const setDurationOfTargetBar = (props: Props): TotalInfo => {
  const { totalInfo, duration, targetBar } = props;

  return {
    ...totalInfo,
    barMetaList: totalInfo.barMetaList.map((bar, index) => {
      if (index + 1 === targetBar) {
        return {
          duration: duration,
          list: makeAppropriateArray({ duration }),
        };
      }

      return bar;
    }),
  };
};
