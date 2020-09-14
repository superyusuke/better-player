import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";
import { useContextHook } from "src/component/BebopperCultivater";

import { BarMeta } from "src/model/music/base";

type Props = {
  bar: BarMeta;
  barNumber: number;
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "column",
  },
  bar: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "blue",
  },
});

export const BarManipulate = (props: Props) => {
  const { setState } = useContextHook();
  const { bar, barNumber } = props;
  const { noteList, duration } = bar;

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        value={duration}
        placeholder={{}}
        style={{
          inputIOS: {
            fontSize: 20,
          },
        }}
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
          <Note
            note={note}
            key={i}
            barIndex={barNumber}
            noteIndex={i + 1}
            manipulateMode={true}
          />
        ))}
      </View>
    </View>
  );
};
