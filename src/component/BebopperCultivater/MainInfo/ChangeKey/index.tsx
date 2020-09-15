import React from "react";
import RNPickerSelect from "react-native-picker-select";

import { useContextHook } from "src/component/BebopperCultivater";
import { Key } from "src/model/music/base";

type Props = {};

export const ChangeKey = (props: Props) => {
  const { setState, state } = useContextHook();
  const {} = props;

  return (
    <RNPickerSelect
      value={state.totalInfo?.key}
      placeholder={{}}
      style={{
        inputIOS: {
          fontSize: 20,
        },
      }}
      onValueChange={(value) => {
        // if (value === duration) {
        //   return;
        // }

        setState({
          type: "changeKey",
          payload: {
            targetKey: value,
          },
        });
      }}
      items={[
        { label: "C", value: "C" },
        { label: "G", value: "G" },
        { label: "D", value: "D" },
        { label: "Eb", value: "Eb" },
        { label: "Ab", value: "Ab" },
        { label: "B", value: "B" },
      ]}
    />
  );
};
