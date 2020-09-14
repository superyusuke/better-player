import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";

import { accidentalList, AccidentalNumber } from "src/model/music/base";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 10,
    minHeight: 20,
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
        backgroundColor: "lightgray",
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 5,
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

  const accidentalToShow = accidentalList.find(
    (o) => o.value === accidentalNumber
  );

  return (
    <View style={styles.wrapper}>
      <Text>{accidentalToShow?.inputLabel || accidentalToShow?.label}</Text>
    </View>
  );
};
