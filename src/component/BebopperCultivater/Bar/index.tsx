import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";
import { useContextHook } from "src/component/BebopperCultivater";

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
    // justifyContent: "center",
    // alignItems: "center",
  },
});

type Props = {
  bar: BarMeta;
  barNumber: number;
};

export const Bar = (props: Props) => {
  const { setState } = useContextHook();
  const { bar, barNumber } = props;
  const { noteList, duration } = bar;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        value={duration}
        placeholder={{}}
        onValueChange={(value) => {
          setState({
            type: "setDurationOfTargetBar",
            payload: {
              duration: value,
              targetBar: barNumber,
            },
          });
        }}
        items={[
          { label: "8", value: 8 },
          { label: "4", value: 4 },
          { label: "16", value: 16 },
        ]}
      />
      <View style={styles.bar}>
        {noteList.map((note, i) => (
          <Note note={note} key={i} barIndex={barNumber} noteIndex={i + 1} />
        ))}
      </View>
    </View>
  );
};
