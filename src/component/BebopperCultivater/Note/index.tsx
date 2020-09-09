import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { NoteMeta, accidentalList } from "src/model/music/base";

import { convertNoteMetaToMappedNote } from "src/model/music/convert/toNoteMapped/convertNoteMetaToMappedNote";
import { NoteNumber } from "src/component/BebopperCultivater/Note/NoteNumber";

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
      <RNPickerSelect
        placeholder={{}}
        onValueChange={(value) => console.log(value)}
        items={accidentalList}
      />
      <NoteNumber />
    </View>
  );
};
