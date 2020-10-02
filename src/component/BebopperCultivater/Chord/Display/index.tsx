import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { ChordMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Chord/Display/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Chord/Display/Accidental";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "blue",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  chord: ChordMeta | null;
  barIndex: number;
  noteIndex: number;
};

export const ChordDisplay = (props: Props) => {
  const { chord } = props;

  return (
    <View style={styles.wrapper}>
      <Accidental accidentalNumber={chord ? chord.accidentalNumber : null} />
      <NoteNumber noteNumber={chord ? chord.noteNumber : null} />
      <Text>{chord?.quality}</Text>
    </View>
  );
};
