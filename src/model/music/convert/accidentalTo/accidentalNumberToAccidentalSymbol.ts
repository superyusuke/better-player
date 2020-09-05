import { AccidentalNumber } from "src/model/music/base";

export const accidentalNumberToAccidentalSymbol = (
  accidental: AccidentalNumber
) => {
  switch (accidental) {
    case -1: {
      return "b";
    }
    case 0: {
      return "";
    }
    case 1: {
      return "#";
    }
  }
};
