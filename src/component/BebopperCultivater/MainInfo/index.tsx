import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { Reset } from "src/component/BebopperCultivater/MainInfo/Reset";
import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {},
});

export const MainInfo = () => {
  const { bottomSheetRef, setState } = useContextHook();

  return (
    <View style={styles.wrapper}>
      <Reset />
      <Button
        title={"1bar"}
        onPress={() => {
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(1);
          }
          setState({
            type: "selectBar",
            payload: {
              targetBar: 1,
            },
          });
        }}
      />
      <Button
        title={"2bar"}
        onPress={() => {
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(1);
          }
          setState({
            type: "selectBar",
            payload: {
              targetBar: 2,
            },
          });
        }}
      />
    </View>
  );
};
