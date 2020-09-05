import React from "react";
import { Text, View } from "react-native";
//　@ts-ignore
import { css } from "@emotion/native";

export const Test = () => {
  return (
    <View
      style={css`
        width: 100%;
      `}
    >
      <Text
        style={css`
          background: red;
          padding: 20px;
          width: 100%;
        `}
      >
        できたっぽいなあ
      </Text>
    </View>
  );
};
