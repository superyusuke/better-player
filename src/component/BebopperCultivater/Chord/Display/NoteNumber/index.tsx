import React from "react";
import { Text } from "react-native";

import {
  NoteNumber as NoteNumberType,
  noteNumberNumeralList,
} from "src/model/music/base";

type Props = {
  noteNumber: NoteNumberType | null;
};

export const NoteNumber = (props: Props) => {
  const { noteNumber } = props;

  const numeralToShow = noteNumberNumeralList.find(
    (o) => o.noteNumber === noteNumber
  );

  return <Text>{numeralToShow?.numeral}</Text>;
};
