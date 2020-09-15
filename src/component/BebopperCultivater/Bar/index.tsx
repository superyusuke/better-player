import React from "react";

import { BarManipulate } from "src/component/BebopperCultivater/Bar/BarManipulate";
import { BarDisplay } from "src/component/BebopperCultivater/Bar/BarDisplay";
import { BarMeta, Key } from "src/model/music/base";

type Props = {
  manipulateMode: boolean;
  bar: BarMeta;
  barNumber: number;
  musicKey: Key;
};

export const Bar = (props: Props) => {
  const { barNumber, manipulateMode, bar, musicKey } = props;

  if (manipulateMode) {
    return (
      <BarManipulate bar={bar} barNumber={barNumber} musicKey={musicKey} />
    );
  }

  return <BarDisplay bar={bar} barNumber={barNumber} musicKey={musicKey} />;
};
