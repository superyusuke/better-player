import { AccidentalNumber } from "src/model/music/base";

export const accidentalNumberToJustString = (accidental: AccidentalNumber) => {
  switch (accidental) {
    case -1: {
      return "-1";
    }
    case 0: {
      return "0";
    }
    case 1: {
      return "1";
    }
  }
};
