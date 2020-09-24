import React, { useEffect } from "react";
import { useContextHook } from "src/component/BebopperCultivater";

import { UI } from "src/component/BebopperCultivater/UI";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export const Container = () => {
  const { state, setState, fetchedData } = useContextHook();

  useEffect(() => {
    setState({
      type: "setInitialFetchedData",
      payload: fetchedData,
    });
  }, [fetchedData]);

  if (!state.totalInfo) {
    return null;
  }

  return (
    <Tab.Navigator initialRouteName={"home"}>
      <Tab.Screen name={"home"} component={UI} />
      <Tab.Screen name={"settings"} component={DummySettingsPage} />
    </Tab.Navigator>
  );
};

const DummySettingsPage = () => {
  return (
    <View>
      <Text>DummySettingsPage</Text>
    </View>
  );
};
