import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import {
  NoteNumber as NoteNumberType,
  noteNumberListForPicker,
} from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  noteNumber: NoteNumberType;
};

export const NoteNumber = (props: Props) => {
  const { noteNumber } = props;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        value={noteNumber}
        placeholder={{}}
        onValueChange={(value) => console.log(value)}
        items={noteNumberListForPicker}
      />
    </View>
  );
};
