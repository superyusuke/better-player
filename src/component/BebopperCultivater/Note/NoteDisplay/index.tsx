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
  note: NoteMeta | null;
};

export const NoteDisplay = (props: Props) => {
  const { note } = props;

  return (
    <View style={styles.wrapper}>
      <Accidental accidentalNumber={note ? note.accidentalNumber : null} />
      <NoteNumber noteNumber={note ? note.noteNumber : null} />
    </View>
  );
};
