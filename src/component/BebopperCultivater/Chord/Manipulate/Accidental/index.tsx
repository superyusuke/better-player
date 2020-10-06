import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { accidentalList, AccidentalNumber } from "src/model/music/base";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 10,
  },
});

type Props = {
  accidentalNumber: AccidentalNumber | null;
  barIndex: number;
  noteIndex: number;
};

export const Accidental = (props: Props) => {
  const { setState } = useContextHook();
  const { accidentalNumber, barIndex, noteIndex } = props;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        value={accidentalNumber}
        style={{
          inputIOS: {
            backgroundColor: "lightgray",
            fontSize: 15,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 5,
          },
        }}
        placeholder={{}}
        onValueChange={(value) => {
          setState({
            type: "setAccidentalOfTargetChordIndexOfTargetBar",
            payload: {
              targetBarIndex: barIndex,
              targetCellIndex: noteIndex,
              accidentalNumber: value,
            },
          });
        }}
        items={accidentalList}
      />
    </View>
  );
};
