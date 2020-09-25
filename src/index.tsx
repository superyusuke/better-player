import React from "react";

import { BebopperCultivater } from "src/component/BebopperCultivater";
import { Other } from "src/test/OthersScreenRoutingTest";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RootList } from "src/rounting";

const Drawer = createDrawerNavigator<RootList>();
import { StatusBar } from "expo-status-bar";

type Props = {};

export const Index = (props: Props) => {
  const {} = props;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"bebopperCultivater"}>
        <Drawer.Screen
          name="bebopperCultivater"
          component={BebopperCultivater}
        />
        <Drawer.Screen name="others" component={Other} />
      </Drawer.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};
