import React from "react";
import RNPickerSelect from "react-native-picker-select";

import { useContextHook } from "src/component/BebopperCultivater";
import { keyListForPicker } from "src/model/music/base";

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
        setState({
          type: "changeKey",
          payload: {
            targetKey: value,
          },
        });
      }}
      items={keyListForPicker}
    />
  );
};
