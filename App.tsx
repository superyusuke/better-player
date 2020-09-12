import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import { BebopperCultivater } from "src/component/BebopperCultivater";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
}
