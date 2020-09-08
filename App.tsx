import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { BebopperCultivater } from "src/component/BebopperCultivater";

export default function App() {
  const [pickerValue, setPickerValue] = useState<string>("java");

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
}
