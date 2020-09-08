import React, { useDebugValue } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BarMeta } from "src/model/music/base";

import { Note } from "src/component/BebopperCultivater/Note";

const styles = StyleSheet.create({
  wrapper: {
    width: "25%",
    flex: 0,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    height: 50,
  },
});

type Props = {
  bar: BarMeta;
};

export const Bar = (props: Props) => {
  const { bar } = props;
  const { noteList } = bar;

  return (
    <View style={styles.wrapper}>
      {noteList.map((note, i) => (
        <Note note={note} key={i} />
      ))}
    </View>
  );
};
