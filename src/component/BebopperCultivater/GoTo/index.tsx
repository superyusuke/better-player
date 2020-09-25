import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useContextHook } from "src/component/BebopperCultivater";

type Props = {};

export const GoTo = (props: Props) => {
  const { state, navigation } = useContextHook();
  const {} = props;

  return (
    <View>
      <Button
        title={"total no menu he"}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};
