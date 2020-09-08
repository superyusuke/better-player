import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { NoteMeta } from "src/model/music/base";

import { convertNoteMetaToMappedNote } from "src/model/music/convert/toNoteMapped/convertNoteMetaToMappedNote";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "blue",
    borderStyle: "dashed",
    flexDirection: "row",
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

  if (!note) {
    return null;
  }

  const mappedNote = convertNoteMetaToMappedNote({
    noteMeta: note,
    key: "C",
  });

  return (
    <View style={styles.wrapper}>
      <Text>{mappedNote.note}</Text>
    </View>
  );
};
