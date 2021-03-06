import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { ChordMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Chord/Manipulate/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Chord/Manipulate/Accidental";
import { Quality } from "src/component/BebopperCultivater/Chord/Manipulate/Quality";

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

export const ChordManipulate = (props: Props) => {
  const { chord, barIndex, noteIndex } = props;

  return (
    <View style={styles.wrapper}>
      <NoteNumber
        noteNumber={chord ? chord.noteNumber : null}
        barIndex={barIndex}
        noteIndex={noteIndex}
      />
      <View>
        <Accidental
          accidentalNumber={chord ? chord.accidentalNumber : null}
          barIndex={barIndex}
          noteIndex={noteIndex}
        />
        <Quality
          quality={chord ? chord.quality : null}
          barIndex={barIndex}
          noteIndex={noteIndex}
        />
      </View>
    </View>
  );
};
