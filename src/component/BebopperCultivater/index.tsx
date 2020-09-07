import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MainInfo } from "src/component/BebopperCultivater/MainInfo";
import { Bar } from "src/component/BebopperCultivater/Bar";

import { TotalInfo } from "src/model/music/base";

const styles = StyleSheet.create({
  base: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
  },
});

const info: TotalInfo = {
  key: "C",
  BarMetList: [
    {
      duration: 8,
      chordList: [],
      noteList: [
        {
          noteNumber: 1,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 2,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 3,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 4,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
      ],
    },
    {
      duration: 4,
      chordList: [],
      noteList: [
        {
          noteNumber: 5,
          octaveNumber: 0,
          accidentalNumber: 1,
        },
        {
          noteNumber: 6,
          octaveNumber: 0,
          accidentalNumber: -1,
        },
      ],
    },
  ],
};

export const BebopperCultivater = () => {
  return (
    <View style={styles.base}>
      <MainInfo />
      {info.BarMetList.map((bar, index) => {
        return <Bar bar={bar} key={index} />;
      })}
    </View>
  );
};
