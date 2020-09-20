import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button } from "react-native";

// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously
import { Clipboard } from "react-native";
if (__DEV__) {
  Clipboard.setString("");
}
// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously

import { BebopperCultivater } from "src/component/BebopperCultivater";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Home = (props: any) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <Button title={"to Other"} onPress={() => navigation.navigate("Other")} />
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
};

const Other = (props: any) => {
  const { navigation } = props;

  return (
    <View>
      <Button title={"to Home"} onPress={() => navigation.navigate("Home")} />
      <Text>Other ページ</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Other" component={Other} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
