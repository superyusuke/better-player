import {
  AccidentalNumber,
  NoteNumber,
  Key,
  OctaveNumber,
  KEY_LIST,
} from "src/model/music/base";
import { accidentalNumberToAccidentalSymbol } from "src/model/music/convert/accidentalTo/accidentalNumberToAccidentalSymbol";
import { octaveNumberToSymbol } from "src/model/music/convert/octaveNumberTo/octaveNumberToSymbol";

type Props = {
  key: Key;
  note: string;
  octaveNumber: OctaveNumber;
};

export const toNoteNumberMapped = (props: Props) => {
  const { note, octaveNumber } = props;

  // const accidentalSymbol = accidentalNumberToAccidentalSymbol(accidentalNumber);
  // const octaveSymbol = octaveNumberToSymbol(octaveNumber);

  // return `${octaveSymbol}${noteNumber}${accidentalSymbol}`;
};
