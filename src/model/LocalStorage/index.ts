import {
  storeData,
  getAllKeys,
  getData,
} from "src/model/LocalStorage/basicMethod";
import { TotalInfo } from "src/model/music/base";

type SaveTotalInfo = {
  totalInfo: TotalInfo;
  saveKey: string;
};

export const saveTotalInfo = async (props: SaveTotalInfo) => {
  const { totalInfo, saveKey } = props;

  await storeData({
    key: saveKey,
    value: totalInfo,
  });
};

type LoadTotalInfo = {
  savedKey: string;
};

export const loadTotalInfo = async (
  props: LoadTotalInfo
): Promise<TotalInfo> => {
  const { savedKey } = props;

  const res = await getData({
    key: savedKey,
  });

  return res;
};

export const getSavedAllKeys = async () => {
  const res = await getAllKeys();
  return res;
};
