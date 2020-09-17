import { TotalInfo } from "src/model/music/base";
import { AddBarType } from "src/component/BebopperCultivater/reducer";

type Props = {
  totalInfo: TotalInfo;
  addBarType: AddBarType;
  indexOfMe: number;
};

export const addBar = (props: Props): TotalInfo => {
  const { totalInfo, addBarType, indexOfMe } = props;

  const list = totalInfo.barMetaList;

  if (addBarType === "default") {
    return {
      ...totalInfo,
      barMetaList: [
        ...list.slice(0, indexOfMe),
        {
          duration: 8,
          noteList: [null, null],
          chordList: [],
        },
        ...list.slice(indexOfMe),
      ],
    };
  }

  return totalInfo;
};
