import React from "react";
import { View, StyleSheet } from "react-native";

import { NoteMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteDisplay/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Note/NoteDisplay/Accidental";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "blue",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  manipulateMode: boolean;
  note: NoteMeta | null;
  barIndex: number;
  noteIndex: number;
};

export const NoteDisplay = (props: Props) => {
  const { note, barIndex, noteIndex, manipulateMode } = props;

  return (
    <View style={styles.wrapper}>
      <Accidental
        accidentalNumber={note ? note.accidentalNumber : null}
        barIndex={barIndex}
        noteIndex={noteIndex}
        manipulateMode={manipulateMode}
      />
      <NoteNumber
        noteNumber={note ? note.noteNumber : null}
        barIndex={barIndex}
        noteIndex={noteIndex}
        manipulateMode={manipulateMode}
      />
    </View>
  );
};
