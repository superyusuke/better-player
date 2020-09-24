import React from "react";
import { View, Button, Text } from "react-native";

import { RootList } from "src/rounting";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type OtherScreenRouteProp = RouteProp<RootList, "others">;

type OtherScreenNavigationProp = StackNavigationProp<RootList, "others">;

type Props = {
  route: OtherScreenRouteProp;
  navigation: OtherScreenNavigationProp;
};

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const Other = (props: Props) => {
  const { navigation } = props;

  return (
    <Tab.Navigator initialRouteName={"test1"}>
      <Tab.Screen name="test1" component={Test1} />
      <Tab.Screen name="test2" component={Test2} />
    </Tab.Navigator>
  );
};

const Test1 = (props: any) => {
  return (
    <Button
      title={"test1"}
      onPress={() => props.navigation.navigate("test2")}
    />
  );
};

const Test2 = (props: any) => {
  return (
    <Button
      title={"test2"}
      onPress={() => props.navigation.navigate("test1")}
    />
  );
};
