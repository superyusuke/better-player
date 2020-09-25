import React, { useEffect } from "react";
import { useContextHook } from "src/component/BebopperCultivater";

import { UI } from "src/component/BebopperCultivater/UI";
import { SaveLoad } from "src/component/BebopperCultivater/SaveLoad";
import { GoTo } from "src/component/BebopperCultivater/GoTo";

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
      <Tab.Screen name={"Save / Load"} component={SaveLoad} />
      <Tab.Screen name={"settings"} component={DummySettingsPage} />
      <Tab.Screen name={"goTo"} component={GoTo} />
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
