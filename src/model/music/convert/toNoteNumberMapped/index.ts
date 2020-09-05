import {
  AccidentalNumber,
  NoteNumber,
  OctaveNumber,
} from "src/model/music/base";
import { accidentalNumberToAccidentalSymbol } from "src/model/music/convert/accidentalTo/accidentalNumberToAccidentalSymbol";
import { octaveNumberToSymbol } from "src/model/music/convert/octaveNumberTo/octaveNumberToSymbol";

type Props = {
  noteNumber: NoteNumber;
  accidentalNumber: AccidentalNumber;
  octaveNumber: OctaveNumber;
};

export const toNoteNumberMapped = (props: Props) => {
  const { accidentalNumber, noteNumber, octaveNumber } = props;
  const accidentalSymbol = accidentalNumberToAccidentalSymbol(accidentalNumber);
  const octaveSymbol = octaveNumberToSymbol(octaveNumber);

  return `${octaveSymbol}${noteNumber}${accidentalSymbol}`;
};
