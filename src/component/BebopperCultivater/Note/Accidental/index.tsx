import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";

import { accidentalList, AccidentalNumber } from "src/model/music/base";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 10,
  },
});

type SelectStyles = {
  manipulateMode: boolean;
};

const selectPickerStyles = (props: SelectStyles): PickerStyle => {
  const { manipulateMode } = props;
  if (manipulateMode) {
    return {
      inputIOS: {
        backgroundColor: "yellow",
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
    };
  }
  return {};
};

type Props = {
  accidentalNumber: AccidentalNumber | null;
  barIndex: number;
  noteIndex: number;
  manipulateMode: boolean;
};

export const Accidental = (props: Props) => {
  const { setState } = useContextHook();
  const { accidentalNumber, barIndex, noteIndex, manipulateMode } = props;

  const pickerStyles = selectPickerStyles({ manipulateMode });

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        disabled={!manipulateMode}
        value={accidentalNumber}
        style={pickerStyles}
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
