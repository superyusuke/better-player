import { TotalInfo } from "src/model/music/base";
import { initialData } from "src/component/BebopperCultivater/initialData";

type Props = {};

export const reset = (props: Props): TotalInfo => {
  return initialData;
};
