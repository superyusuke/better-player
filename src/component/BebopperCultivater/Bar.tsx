import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";

import { BarMeta } from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    width: "25%",
    flexDirection: "column",
  },
  bar: {
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
      <RNPickerSelect
        placeholder={{}}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
      <View style={styles.bar}>
        {noteList.map((note, i) => (
          <Note note={note} key={i} />
        ))}
      </View>
    </View>
  );
};
