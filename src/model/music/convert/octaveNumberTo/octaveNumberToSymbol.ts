import { OctaveNumber } from "src/model/music/base";

export const octaveNumberToSymbol = (octaveNumber: OctaveNumber) => {
  switch (octaveNumber) {
    case -1: {
      return "_";
    }
    case 0: {
      return "";
    }
    case 1: {
      return "^";
    }
  }
};
