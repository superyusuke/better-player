import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";

import {
  accidentalList,
  BarMeta,
  noteNumberListForPicker,
} from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    width: "25%",
    flexDirection: "column",
  },
  bar: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    height: 50,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

type Props = {
  // bar: BarMeta;
};

export const NoteNumber = (props: Props) => {
  // const { bar } = props;
  // const { noteList } = bar;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        placeholder={{}}
        onValueChange={(value) => console.log(value)}
        items={noteNumberListForPicker}
      />
    </View>
  );
};
