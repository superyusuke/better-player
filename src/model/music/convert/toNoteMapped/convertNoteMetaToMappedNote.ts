import {
  NoteMeta,
  NoteMapped,
  KEY_LIST,
  Key,
  AccidentalNumber,
  NoteNumber,
  OctaveNumber,
  ScaleItem,
} from "src/model/music/base";

import { accidentalNumberToJustString } from "src/model/music/convert/accidentalTo/accidentalNumberToJustString";
import { toNoteNumberMapped } from "src/model/music/convert/toNoteNumberMapped";
import { octaveNumberToSymbol } from "src/model/music/convert/octaveNumberTo/octaveNumberToSymbol";

type Props = {
  key: Key;
  noteMeta: NoteMeta;
};

type Out = NoteMapped;

type ToNote = {
  key: Key;
  accidentalNumber: AccidentalNumber;
  noteNumber: NoteNumber;
  octaveNumber: OctaveNumber;
};

const toNote = (props: ToNote) => {
  const { key, accidentalNumber, noteNumber, octaveNumber } = props;

  if (noteNumber === null) {
    return "";
  }

  const noteInfo: ScaleItem | undefined =
    KEY_LIST[key][accidentalNumberToJustString(accidentalNumber)][
      noteNumber - 1
    ];

  const octaveSymbol = octaveNumberToSymbol(octaveNumber);

  if (!noteInfo) {
    return "";
  }

  return `${octaveSymbol}${noteInfo.noteMapped}`;
};

export const convertNoteMetaToMappedNote = (props: Props): Out => {
  const { noteMeta, key } = props;
  const { accidentalNumber, noteNumber, octaveNumber } = noteMeta;

  return {
    note: toNote({
      noteNumber,
      accidentalNumber,
      key,
      octaveNumber,
    }),
    number: toNoteNumberMapped({
      noteNumber,
      accidentalNumber,
      octaveNumber,
    }),
  };
};
