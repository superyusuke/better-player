import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { accidentalList, AccidentalNumber } from "src/model/music/base";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    minWidth: 10,
  },
});

type Props = {
  accidentalNumber: AccidentalNumber | null;
  barIndex: number;
  noteIndex: number;
  manipulateMode: boolean;
};

export const Accidental = (props: Props) => {
  const { setState } = useContextHook();
  const { accidentalNumber, barIndex, noteIndex, manipulateMode } = props;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        disabled={!manipulateMode}
        value={accidentalNumber}
        placeholder={{}}
        onValueChange={(value) => {
          setState({
            type: "setAccidentalOfTargetNoteIndexOfTargetBar",
            payload: {
              targetBarIndex: barIndex,
              targetNoteIndex: noteIndex,
              accidentalNumber: value,
            },
          });
        }}
        items={accidentalList}
      />
    </View>
  );
};
