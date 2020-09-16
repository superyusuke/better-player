import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import { BebopperCultivater } from "src/component/BebopperCultivater";
import Constants from "expo-constants";

import { MultiPlatformTest } from "src/component/MultiPlatformTest";

export default function App() {
  const statusBarHeight = Constants.statusBarHeight;

  alert(statusBarHeight);
  return (
    <View style={{ flex: 1, paddingTop: statusBarHeight }}>
      <MultiPlatformTest />
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
}
