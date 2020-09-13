import React from "react";
import { View, StyleSheet } from "react-native";

import { MainInfo } from "src/component/BebopperCultivater/MainInfo";
import { Bar } from "src/component/BebopperCultivater/Bar";
import { useContextHook } from "src/component/BebopperCultivater";

import { BottomSheetComp } from "src/component/BebopperCultivater/BottomSheet";

const styles = StyleSheet.create({
  zero: {
    flex: 1,
    backgroundColor: "gray",
  },
  base: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
    margin: 15,
  },
  barList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const UI = () => {
  const { state } = useContextHook();

  if (!state.totalInfo) {
    return null;
  }

  return (
    <View style={styles.zero}>
      <BottomSheetComp />
      <View style={styles.base}>
        <MainInfo />
        <View style={styles.barList}>
          {state.totalInfo.barMetaList.map((bar, index) => {
            return (
              <Bar
                manipulateMode={false}
                bar={bar}
                key={index}
                barNumber={index + 1}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
