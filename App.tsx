import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { Test } from "src/Test";

export default function App() {
  return (
    <View>
      <Text>aaa</Text>
      <StatusBar style="auto" />
      <Test />
    </View>
  );
}
