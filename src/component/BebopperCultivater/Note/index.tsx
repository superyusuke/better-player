import React from "react";
import { View, StyleSheet } from "react-native";

import { NoteMeta } from "src/model/music/base";

import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteNumber";
import { Accidental } from "src/component/BebopperCultivater/Note/Accidental";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "blue",
    borderStyle: "dashed",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  note: NoteMeta | null;
};

export const Note = (props: Props) => {
  const { note } = props;

  // if (!note) {
  //   return null;
  // }
  //
  // const mappedNote = convertNoteMetaToMappedNote({
  //   noteMeta: note,
  //   key: "C",
  // });

  return (
    <View style={styles.wrapper}>
      <Accidental />
      {note ? <NoteNumber noteNumber={note.noteNumber} /> : null}
    </View>
  );
};
