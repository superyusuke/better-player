import React from "react";

import { View, StyleSheet } from "react-native";

import { Reset } from "src/component/BebopperCultivater/MainInfo/Reset";
import { ChangeKey } from "src/component/BebopperCultivater/MainInfo/ChangeKey";

const styles = StyleSheet.create({
  wrapper: {},
});

export const MainInfo = () => {
  return (
    <View style={styles.wrapper}>
      <ChangeKey />
      <Reset />
    </View>
  );
};
