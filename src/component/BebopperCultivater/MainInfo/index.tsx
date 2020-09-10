import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Reset } from "src/component/BebopperCultivater/MainInfo/Reset";

const styles = StyleSheet.create({
  wrapper: {},
});

export const MainInfo = () => {
  return (
    <View style={styles.wrapper}>
      <Reset />
      <Text>MainInfo</Text>
      <Text>2222</Text>
    </View>
  );
};
