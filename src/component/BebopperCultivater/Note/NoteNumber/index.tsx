import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import {
  NoteNumber as NoteNumberType,
  noteNumberListForPicker,
} from "src/model/music/base";

import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  noteNumber: NoteNumberType | null;
  barIndex: number;
  noteIndex: number;
};

export const NoteNumber = (props: Props) => {
  const { setState } = useContextHook();
  const { noteNumber, noteIndex, barIndex } = props;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        // style={{
        //   iconContainer: {
        //     backgroundColor: "green",
        //     width: 10,
        //     height: 10,
        //   },
        //   viewContainer: {
        //     backgroundColor: "green",
        //     width: 10,
        //     height: 10,
        //   },
        // }}
        value={noteNumber}
        placeholder={{}}
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
