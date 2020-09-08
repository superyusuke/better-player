import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { BebopperCultivater } from "src/component/BebopperCultivater";

export default function App() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
}
