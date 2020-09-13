import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";
import { useContextHook } from "src/component/BebopperCultivater";

import { BarMeta } from "src/model/music/base";

type SelectStyles = {
  manipulateMode: boolean;
  borderRightWidth: number;
};

const selectStyles = (props: SelectStyles) => {
  const { manipulateMode, borderRightWidth } = props;

  if (manipulateMode) {
    return StyleSheet.create({
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
  }

  return StyleSheet.create({
    wrapper: {
      width: "25%",
      flexDirection: "column",
    },
    bar: {
      flexDirection: "row",
      borderRightWidth: borderRightWidth,
      borderColor: "blue",
    },
  });
};

type Props = {
  manipulateMode: boolean;
  bar: BarMeta;
  barNumber: number;
};

export const Bar = (props: Props) => {
  const { setState, bottomSheetRef } = useContextHook();
  const { bar, barNumber, manipulateMode } = props;
  const { noteList, duration } = bar;

  const borderRightWidth = barNumber % 4 ? 0 : 1;

  const styles = selectStyles({ manipulateMode, borderRightWidth });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          setState({
            type: "selectBar",
            payload: {
              targetBar: barNumber,
            },
          });
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(1);
          }
        }}
      >
        <RNPickerSelect
          disabled={!manipulateMode}
          value={duration}
          placeholder={{}}
          style={{
            inputIOS: {
              fontSize: 20,
              // textAlign: "right",
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
              manipulateMode={manipulateMode}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};
