import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { NoteMeta, Key } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteDisplay/NoteNumber";
import { NoteMapped } from "src/component/BebopperCultivater/Note/NoteDisplay/NoteMapped";
import { Accidental } from "src/component/BebopperCultivater/Note/NoteDisplay/Accidental";

type Props = {
  note: NoteMeta | null;
  musicKey: Key;
  noteIndex: number;
};

export const NoteDisplay = (props: Props) => {
  const { note, musicKey, noteIndex } = props;

  const styles = StyleSheet.create({
    wrapper: {
      borderColor: "blue",
      flexDirection: "column",
      borderBottomWidth: 1,
      borderLeftWidth: noteIndex === 1 ? 0 : 1,
      borderTopWidth: 1,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {note?.accidentalNumber ? (
          <Accidental accidentalNumber={note.accidentalNumber} />
        ) : null}
        <NoteNumber noteNumber={note ? note.noteNumber : null} />
      </View>

      <NoteMapped noteMeta={note} musicKey={musicKey} />
    </View>
  );
};
