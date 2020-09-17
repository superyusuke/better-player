import { TotalInfo } from "src/model/music/base";
import { DeleteBarType } from "src/component/BebopperCultivater/reducer";

type Props = {
  totalInfo: TotalInfo;
  deleteBarType: DeleteBarType;
  indexOfMe: number;
};

export const deleteBar = (props: Props): TotalInfo => {
  const { totalInfo, deleteBarType, indexOfMe } = props;

  const list = totalInfo.barMetaList;

  const realIndex = indexOfMe - 1;

  if (deleteBarType === "me") {
    return {
      ...totalInfo,
      barMetaList: [...list.slice(0, realIndex), ...list.slice(realIndex + 1)],
    };
  }

  return totalInfo;
};
