import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";

import {
  NoteNumber as NoteNumberType,
  noteNumberListForPicker,
} from "src/model/music/base";

import { useContextHook } from "src/component/BebopperCultivater";

type SelectStyles = {
  manipulateMode: boolean;
};

const selectStyles = (props: SelectStyles) => {
  const { manipulateMode } = props;

  if (manipulateMode) {
    return StyleSheet.create({
      wrapper: {
        justifyContent: "center",
        alignItems: "center",
      },
    });
  }

  return StyleSheet.create({
    wrapper: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

const selectPickerStyles = (props: SelectStyles): PickerStyle => {
  const { manipulateMode } = props;
  if (manipulateMode) {
    return {
      inputIOS: {
        fontSize: 25,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "lightgray",
      },
    };
  }
  return {};
};

type Props = {
  noteNumber: NoteNumberType | null;
  barIndex: number;
  noteIndex: number;
  manipulateMode: boolean;
};

export const NoteNumber = (props: Props) => {
  const { setState } = useContextHook();
  const { noteNumber, noteIndex, barIndex, manipulateMode } = props;

  const styles = selectStyles({ manipulateMode });

  const pickerStyles = selectPickerStyles({ manipulateMode });

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        disabled={!manipulateMode}
        value={noteNumber}
        placeholder={{}}
        style={pickerStyles}
        onValueChange={(value) =>
          setState({
            type: "setNoteNumberOfTargetNoteIndexOfTargetBar",
            payload: {
              noteNumber: value,
              targetNoteIndex: noteIndex,
              targetBarIndex: barIndex,
            },
          })
        }
        items={noteNumberListForPicker}
      />
    </View>
  );
};
