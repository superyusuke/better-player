import React from "react";
import { View, Button } from "react-native";

import { useContextHook } from "src/component/BebopperCultivater";

type Props = {};

export const ShowBebopper = (props: Props) => {
  const { setState, state } = useContextHook();

  return (
    <View>
      <Button
        title={"joutai oshiete"}
        onPress={() => {
          console.log(state, "state");
        }}
      />
      <Button
        title={"miseru"}
        onPress={() => {
          setState({
            type: "setBebopperToolOn",
            payload: {
              on: true,
            },
          });
        }}
      />
      <Button
        title={"kesu"}
        onPress={() => {
          setState({
            type: "setBebopperToolOn",
            payload: {
              on: false,
            },
          });
        }}
      />
    </View>
  );
};
