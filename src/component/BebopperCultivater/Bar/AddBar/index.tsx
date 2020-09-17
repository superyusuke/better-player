import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useContextHook } from "src/component/BebopperCultivater";

type Props = {
  barNumber: number;
  totalBarLength: number;
};

export const AddBar = (props: Props) => {
  const { setState } = useContextHook();
  const { barNumber, totalBarLength } = props;

  if (barNumber !== totalBarLength) {
    return null;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setState({
            type: "addBar",
            payload: {
              addBarType: "default",
              indexOfMe: barNumber,
            },
          });
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};
