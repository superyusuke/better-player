import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { Card } from "src/component/Card";

export default function App() {
  return (
    <View>
      <Text>aaa</Text>
      <StatusBar style="auto" />
      <Card />
    </View>
  );
}
