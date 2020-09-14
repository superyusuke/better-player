import React from "react";

import { BarManipulate } from "src/component/BebopperCultivater/Bar/BarManipulate";
import { BarDisplay } from "src/component/BebopperCultivater/Bar/BarDisplay";
import { BarMeta } from "src/model/music/base";

type Props = {
  manipulateMode: boolean;
  bar: BarMeta;
  barNumber: number;
};

export const Bar = (props: Props) => {
  const { barNumber, manipulateMode, bar } = props;

  if (manipulateMode) {
    return <BarManipulate bar={bar} barNumber={barNumber} />;
  }

  return <BarDisplay bar={bar} barNumber={barNumber} />;
};
