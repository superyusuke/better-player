import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import { useContextHook } from "src/component/BebopperCultivater";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 10,
  },
});

type Props = {
  quality: string | null;
  barIndex: number;
  noteIndex: number;
};

export const Quality = (props: Props) => {
  const { setState } = useContextHook();
  const { quality, barIndex, noteIndex } = props;

  return (
    <View style={styles.wrapper}>
      <TextInput
        autoCapitalize={"none"}
        style={{ backgroundColor: "yellow", minWidth: 40 }}
        value={quality ?? ""}
        onChangeText={(text) => {
          setState({
            type: "setQualityOfTargetCellOfTargetBar",
            payload: {
              targetBarIndex: barIndex,
              targetCellIndex: noteIndex,
              quality: text,
            },
          });
        }}
      />
    </View>
  );
};
