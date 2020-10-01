import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Note } from "src/component/BebopperCultivater/Note";
import { AddBar } from "src/component/BebopperCultivater/Bar/AddBar";
import { useContextHook } from "src/component/BebopperCultivater";

import { BarMeta, Key } from "src/model/music/base";

type Props = {
  bar: BarMeta;
  barNumber: number;
  musicKey: Key;
};

export const BarDisplay = (props: Props) => {
  const { setState, bottomSheetRef, state } = useContextHook();
  const { bar, barNumber, musicKey } = props;
  const { list, duration } = bar;

  const isSelected = state.selected ? state.selected.bar === barNumber : false;
  const totalBarLength = state.totalInfo?.barMetaList.length;

  const borderRightWidth =
    totalBarLength === barNumber ? 1 : barNumber % 4 ? 0 : 1;

  const styles = StyleSheet.create({
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{duration}</Text>
          <AddBar barNumber={barNumber} totalBarLength={totalBarLength ?? 0} />
        </View>
        <View style={styles.bar}>
          {list.map((listItem, i) => (
            <Note
              musicKey={musicKey}
              note={listItem.note}
              key={i}
              barIndex={barNumber}
              noteIndex={i + 1}
              manipulateMode={false}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};
