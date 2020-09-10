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
  barIndex: number;
  noteIndex: number;
};

export const Note = (props: Props) => {
  const { note, barIndex, noteIndex } = props;

  return (
    <View style={styles.wrapper}>
      <Accidental />
      {/* ここおかしい note null でも出す必要あり*/}
      {note ? (
        <NoteNumber
          noteNumber={note.noteNumber}
          barIndex={barIndex}
          noteIndex={noteIndex}
        />
      ) : null}
    </View>
  );
};
