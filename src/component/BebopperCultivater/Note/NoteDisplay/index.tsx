import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { NoteMeta, Key } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteDisplay/NoteNumber";
import { NoteMapped } from "src/component/BebopperCultivater/Note/NoteDisplay/NoteMapped";
import { Accidental } from "src/component/BebopperCultivater/Note/NoteDisplay/Accidental";
import { useContextHook } from "src/component/BebopperCultivater";

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
  musicKey: Key;
};

export const NoteDisplay = (props: Props) => {
  const { note, musicKey } = props;

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
