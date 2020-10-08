import React from "react";
import { View, Text } from "react-native";
import { ChordMeta } from "src/model/music/base";

type Props = {
  chord: ChordMeta | null;
};

export const MappedChord = (props: Props) => {
  const { chord } = props;

  if (!chord) return null;

  const toShow = chord.noteNumber ? "aru" : "";

  return (
    <View>
      <Text>{toShow}</Text>
    </View>
  );
};
