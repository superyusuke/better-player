import React from "react";
import { View, StyleSheet } from "react-native";

import { MainInfo } from "src/component/BebopperCultivater/MainInfo";
import { Bar } from "src/component/BebopperCultivater/Bar";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  base: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
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

  console.log(state.totalInfo);

  return (
    <View style={styles.base}>
      <MainInfo />
      <View style={styles.barList}>
        {state.totalInfo.barMetaList.map((bar, index) => {
          return <Bar bar={bar} key={index} barNumber={index + 1} />;
        })}
      </View>
    </View>
  );
};
