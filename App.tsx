import { StatusBar } from "expo-status-bar";
import React from "react";

// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously
import { Clipboard } from "react-native";
if (__DEV__) {
  Clipboard.setString("");
}
// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously

import { BebopperCultivater } from "src/component/BebopperCultivater";
import { Other } from "src/test/OthersScreenRoutingTest";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootList } from "src/rounting";

const Stack = createStackNavigator<RootList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"bebopperCultivater"}>
        <Stack.Screen
          name="bebopperCultivater"
          component={BebopperCultivater}
          options={{ title: "bebopperCultivater" }}
        />
        <Stack.Screen name="others" component={Other} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
