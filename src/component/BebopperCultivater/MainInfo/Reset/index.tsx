import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  base: {},
});

export const Reset = () => {
  const { state, setState } = useContextHook();

  const handleReset = () => {
    setState({
      type: "reset",
    });
  };

  return (
    <View style={styles.base}>
      <Button title={"reset"} onPress={handleReset} />
    </View>
  );
};
