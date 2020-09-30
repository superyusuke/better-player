import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { convertNoteMetaToMappedNote } from "src/model/music/convert/toNoteMapped/convertNoteMetaToMappedNote";
import { NoteMeta, Key } from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 20,
  },
});

type Props = {
  noteMeta: NoteMeta | null;
  musicKey?: Key;
};

export const NoteMapped = (props: Props) => {
  const { noteMeta, musicKey } = props;

  if (!musicKey || !noteMeta) {
    return <View style={styles.wrapper} />;
  }

  const note = convertNoteMetaToMappedNote({ key: musicKey, noteMeta });

  return (
    <View style={styles.wrapper}>
      <Text>{note.note}</Text>
    </View>
  );
};
