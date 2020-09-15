import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useContextHook } from "src/component/BebopperCultivater";
import { Bar } from "src/component/BebopperCultivater/Bar";
import { keyList } from "src/model/music/base";

type Props = {};

const styles = StyleSheet.create({
  barList: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "lightyellow",
  },
});

export const BebopperTool = (props: Props) => {
  const { state } = useContextHook();
  const { totalInfo } = state;
  if (!totalInfo) {
    return null;
  }
  const { barMetaList } = totalInfo;

  return (
    <View style={{}}>
      <View style={styles.barList}>
        {keyList.map((key) =>
          barMetaList.map((bar, index) => {
            return (
              <Bar
                musicKey={key}
                manipulateMode={false}
                bar={bar}
                key={index}
                barNumber={index + 1}
              />
            );
          })
        )}
      </View>
    </View>
  );
};
