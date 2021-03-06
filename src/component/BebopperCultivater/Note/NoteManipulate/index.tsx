import React from "react";
import { View, StyleSheet } from "react-native";

import { NoteMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteManipulate/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Note/NoteManipulate/Accidental";

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
  note: NoteMeta | null;
  barIndex: number;
  noteIndex: number;
};

export const NoteManipulate = (props: Props) => {
  const { note, barIndex, noteIndex } = props;

  return (
    <View style={styles.wrapper}>
      <NoteNumber
        noteNumber={note ? note.noteNumber : null}
        barIndex={barIndex}
        noteIndex={noteIndex}
      />
      <Accidental
        accidentalNumber={note ? note.accidentalNumber : null}
        barIndex={barIndex}
        noteIndex={noteIndex}
      />
    </View>
  );
};
