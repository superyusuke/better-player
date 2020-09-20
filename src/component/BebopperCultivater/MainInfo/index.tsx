import React from "react";

import { View, StyleSheet } from "react-native";

import { Reset } from "src/component/BebopperCultivater/MainInfo/Reset";
import { ChangeKey } from "src/component/BebopperCultivater/MainInfo/ChangeKey";
import { ShowBebopper } from "src/component/BebopperCultivater/MainInfo/ShowBebopper";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
});

export const MainInfo = () => {
  return (
    <View style={styles.wrapper}>
      <ChangeKey />
      <ShowBebopper />
      <Reset />
    </View>
  );
};
