import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { MainInfo } from "src/component/BebopperCultivater/MainInfo";
import { Bar } from "src/component/BebopperCultivater/Bar";
import { useContextHook } from "src/component/BebopperCultivater/index";

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

export const BebopperCultivater = () => {
  const { state, setState, fetchedData } = useContextHook();

  useEffect(() => {
    setState({
      type: "setInitialFetchedData",
      payload: fetchedData,
    });
  }, [fetchedData]);

  if (!state.totalInfo) {
    return null;
  }

  return (
    <View style={styles.base}>
      <MainInfo />
      <View style={styles.barList}>
        {state.totalInfo.BarMetList.map((bar, index) => {
          return <Bar bar={bar} key={index} />;
        })}
      </View>
    </View>
  );
};
