import React from "react";
import { View, Text } from "react-native";

import { accidentalList, AccidentalNumber } from "src/model/music/base";

type Props = {
  accidentalNumber: AccidentalNumber | null;
};

export const Accidental = (props: Props) => {
  const { accidentalNumber } = props;

  const accidentalToShow = accidentalList.find(
    (o) => o.value === accidentalNumber
  );

  console.log(accidentalToShow);

  return (
    <View style={{}}>
      <Text
        style={{
          justifyContent: "flex-start",
        }}
      >
        {accidentalToShow?.inputLabel || accidentalToShow?.label}
      </Text>
    </View>
  );
};
