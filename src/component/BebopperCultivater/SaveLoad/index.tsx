import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { LocalStorageComponent } from "src/component/BebopperCultivater/SaveLoad/LocalStorage";

type Props = {};

export const SaveLoad = (props: Props) => {
  const {} = props;

  return (
    <View>
      <Text>SaveLoad</Text>
      <LocalStorageComponent />
    </View>
  );
};
