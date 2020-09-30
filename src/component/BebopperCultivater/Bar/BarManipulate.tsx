import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";
import { Chord } from "src/component/BebopperCultivater/Chord";
import { useContextHook } from "src/component/BebopperCultivater";

import { BarMeta, Key } from "src/model/music/base";

type Props = {
  bar: BarMeta;
  barNumber: number;
  musicKey: Key;
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
  const { bar, barNumber, musicKey } = props;
  const { noteList, duration, chordList } = bar;

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
          if (value === duration) {
            return;
          }
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
      <View style={{ flexDirection: "column" }}>
        <View style={styles.bar}>
          {noteList.map((note, i) => (
            <Note
              note={note}
              key={i}
              barIndex={barNumber}
              noteIndex={i + 1}
              manipulateMode={true}
              musicKey={musicKey}
            />
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "red",
          }}
        >
          {chordList.map((chord, i) => (
            <Chord
              chord={chord}
              key={i}
              barIndex={barNumber}
              noteIndex={i + 1}
              manipulateMode={true}
              musicKey={musicKey}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
