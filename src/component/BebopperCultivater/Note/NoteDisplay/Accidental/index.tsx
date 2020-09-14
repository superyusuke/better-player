import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { accidentalList, AccidentalNumber } from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 10,
    minHeight: 20,
  },
});

type Props = {
  accidentalNumber: AccidentalNumber | null;
};

export const Accidental = (props: Props) => {
  const { accidentalNumber } = props;

  const accidentalToShow = accidentalList.find(
    (o) => o.value === accidentalNumber
  );

  return (
    <View style={styles.wrapper}>
      <Text>{accidentalToShow?.inputLabel || accidentalToShow?.label}</Text>
    </View>
  );
};
