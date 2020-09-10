import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { accidentalList } from "src/model/music/base";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  // bar: BarMeta;
};

export const Accidental = (props: Props) => {
  // const { bar } = props;
  // const { noteList } = bar;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        placeholder={{}}
        onValueChange={(value) => console.log(value)}
        items={accidentalList}
      />
    </View>
  );
};
