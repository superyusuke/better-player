import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { ChordMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Chord/Display/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Chord/Display/Accidental";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "blue",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    minHeight: 30,
    position: "relative",
    justifyContent: "center",
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
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <NoteNumber noteNumber={chord ? chord.noteNumber : null} />
        <Accidental accidentalNumber={chord ? chord.accidentalNumber : null} />
        <Text>{chord?.quality}</Text>
      </View>
    </View>
  );
};
