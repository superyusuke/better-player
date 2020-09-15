import { PickerSelectProps } from "react-native-picker-select";

import { KEY_LIST } from "src/model/music/base/KEY_LIST";

export { KEY_LIST };

export type Key =
  | "C"
  | "G"
  | "D"
  | "A"
  | "E"
  | "B"
  | "F#"
  | "C#"
  | "F"
  | "Bb"
  | "Eb"
  | "Ab"
  | "Db"
  | "Gb"
  | "Cb";

// C G D A E B F# C#
// C F Bb Eb Ab Db Gb Cb
// https://people.carleton.edu/~jellinge/m101s12/Pages/13/13KeySignatures.html

export type ScaleItem = {
  pitchClass: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  noteMapped: string;
};

type ScaleTuple = [
  ScaleItem,
  ScaleItem,
  ScaleItem,
  ScaleItem,
  ScaleItem,
  ScaleItem,
  ScaleItem
];

export type AccidentalNumber = -1 | 0 | 1;
export const accidentalList: PickerSelectProps["items"] = [
  {
    label: "♮",
    value: 0,
    // 空文字だと消えてしまう。スペースを入れる必要あり。
    inputLabel: " ",
  },
  {
    label: "♯",
    value: 1,
  },
  {
    label: "♭",
    value: -1,
  },
];
export type AccidentalNumberString = "-1" | "0" | "1";

export type KeyList = {
  [key in Key]: {
    [accidental in AccidentalNumberString]: ScaleTuple;
  };
};

export type NoteNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const noteNumberList = [null, 1, 2, 3, 4, 5, 6, 7];
export const noteNumberListForPicker: PickerSelectProps["items"] = noteNumberList.map(
  (o) => {
    if (o === null) {
      return {
        value: null,
        label: " ",
      };
    }

    return {
      label: String(o),
      value: o,
    };
  }
);

export type OctaveNumber = -1 | 0 | 1;
export const octaveNumber = -1 | 0 | 1;

export type NoteMeta = {
  noteNumber: NoteNumber;
  accidentalNumber: AccidentalNumber;
  octaveNumber: OctaveNumber;
};

export type NoteMetaList = (NoteMeta | null)[];

export type NoteMapped = {
  number: string;
  note: string;
};

export type ChordMeta = {
  number: number;
  accidental: number;
  quality: string;
};

export type ChordMetaList = (ChordMeta | null)[];

export type Duration = 4 | 8 | 16 | 6;

export type BarMeta = {
  duration: Duration;
  noteList: NoteMetaList;
  chordList: ChordMetaList;
};

export type TotalInfo = {
  key: Key;
  barMetaList: BarMeta[];
};
