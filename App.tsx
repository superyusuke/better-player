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

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

export type RootList = {
  home: undefined;
  others: undefined;
};

const Stack = createStackNavigator<RootList>();

type HomeScreenRouteProp = RouteProp<RootList, "home">;

type HomeScreenNavigationProp = StackNavigationProp<RootList, "home">;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  const { navigation, route } = props;

  console.log(route, "this is route");

  return (
    <View style={{ flex: 1 }}>
      <Button
        title={"to Other"}
        onPress={() => navigation.navigate("others")}
      />
      <BebopperCultivater />
      <StatusBar style="auto" />
    </View>
  );
};

const Other = (props: any) => {
  const { navigation } = props;

  return (
    <View>
      <Button
        title={"to Home"}
        onPress={() =>
          navigation.navigate("home", {
            superParams: "this is super params",
          })
        }
      />
      <Text>Other ページ</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"home"}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "最強のアプリのホーム" }}
        />
        <Stack.Screen name="others" component={Other} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
