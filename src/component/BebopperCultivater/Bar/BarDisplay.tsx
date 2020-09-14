import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Note } from "src/component/BebopperCultivater/Note";
import { useContextHook } from "src/component/BebopperCultivater";

import { BarMeta } from "src/model/music/base";

type SelectStyles = {
  manipulateMode: boolean;
  borderRightWidth: number;
  isSelected: boolean;
};

const selectStyles = (props: SelectStyles) => {
  const { manipulateMode, borderRightWidth, isSelected } = props;

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
      backgroundColor: isSelected ? "red" : undefined,
    },
  });
};

type Props = {
  manipulateMode: boolean;
  bar: BarMeta;
  barNumber: number;
};

export const BarDisplay = (props: Props) => {
  const { setState, bottomSheetRef, state } = useContextHook();
  const { bar, barNumber, manipulateMode } = props;
  const { noteList, duration } = bar;

  const isSelected = state.selected ? state.selected.bar === barNumber : false;
  const totalBarLength = state.totalInfo?.barMetaList.length;

  const borderRightWidth =
    totalBarLength === barNumber ? 1 : barNumber % 4 ? 0 : 1;

  const styles = selectStyles({
    manipulateMode,
    borderRightWidth,
    isSelected,
  });

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
        <Text>{duration}</Text>
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
