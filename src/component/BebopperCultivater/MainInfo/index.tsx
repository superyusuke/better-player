import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { Reset } from "src/component/BebopperCultivater/MainInfo/Reset";
import {
  BebopperCultivater,
  useContextHook,
} from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {},
});

export const MainInfo = () => {
  const { bottomSheetRef } = useContextHook();

  return (
    <View style={styles.wrapper}>
      <Reset />
      <Text>MainInfo</Text>
      <Button
        title={"osu"}
        onPress={() => {
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(1);
          }
        }}
      />
      <Text>2222</Text>
    </View>
  );
};
