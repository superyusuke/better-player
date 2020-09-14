import React from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  NoteNumber as NoteNumberType,
  noteNumberListForPicker,
} from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 20,
  },
});

type Props = {
  noteNumber: NoteNumberType | null;
  barIndex: number;
  noteIndex: number;
  manipulateMode: boolean;
};

export const NoteNumber = (props: Props) => {
  const { noteNumber } = props;

  const noteNumberToShow = noteNumberListForPicker.find(
    (o) => o.value === noteNumber
  );

  return (
    <View style={styles.wrapper}>
      <Text>{noteNumberToShow?.inputLabel || noteNumberToShow?.label}</Text>
    </View>
  );
};
