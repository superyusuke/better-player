import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { convertNoteMetaToMappedNote } from "src/model/music/convert/toNoteMapped/convertNoteMetaToMappedNote";
import { NoteMeta, Key } from "src/model/music/base";

type Props = {
  noteMeta: NoteMeta | null;
  musicKey?: Key;
};

export const NoteMapped = (props: Props) => {
  const { noteMeta, musicKey } = props;

  if (!musicKey || !noteMeta) {
    return null;
  }

  const note = convertNoteMetaToMappedNote({ key: musicKey, noteMeta });

  return (
    <View>
      <Text>{note.note}</Text>
    </View>
  );
};
