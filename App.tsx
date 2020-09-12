import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { BebopperCultivater } from "src/component/BebopperCultivater";

import { BottomSheetComp } from "src/component/BebopperCultivater/BottomSheet";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <BottomSheetComp />
      <View style={{ padding: 20, flex: 1 }}>
        <BebopperCultivater />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
