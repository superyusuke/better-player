import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { MainInfo } from "src/component/BebopperCultivater/MainInfo";
import { Bar } from "src/component/BebopperCultivater/Bar";
import { useContextHook } from "src/component/BebopperCultivater";

import { BottomSheetComp } from "src/component/BebopperCultivater/BottomSheet";
import { BebopperTool } from "src/component/BebopperCultivater/BebopperTool";

const styles = StyleSheet.create({
  zero: {
    flex: 1,
  },
  base: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 15,
  },
  barList: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "blue",
  },
});

export const UI = () => {
  const { state, navigation } = useContextHook();

  if (!state.totalInfo) {
    return null;
  }

  const musicKey = state.totalInfo.key;

  return (
    <SafeAreaView style={styles.zero}>
      <BottomSheetComp />
      <View style={{ flexDirection: "column" }}>
        <MainInfo />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.base}>
          <View style={styles.barList}>
            {state.totalInfo.barMetaList.map((bar, index) => {
              return (
                <Bar
                  musicKey={musicKey}
                  manipulateMode={false}
                  bar={bar}
                  key={index}
                  barNumber={index + 1}
                />
              );
            })}
          </View>
          {state.bebopperTool.show ? <BebopperTool /> : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
