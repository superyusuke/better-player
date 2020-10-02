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

export const keyList = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "C#",
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "Cb",
] as const;

export const keyListForPicker: PickerSelectProps["items"] = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "C#",
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "Cb",
].map((key) => ({
  value: key,
  label: key,
}));

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

export const noteNumberNumeralList = [
  {
    noteNumber: 1,
    numeral: "Ⅰ",
  },
  {
    noteNumber: 2,
    numeral: "Ⅱ",
  },
  {
    noteNumber: 3,
    numeral: "Ⅲ",
  },
  {
    noteNumber: 4,
    numeral: "Ⅳ",
  },
  {
    noteNumber: 5,
    numeral: "Ⅴ",
  },
  {
    noteNumber: 6,
    numeral: "Ⅵ",
  },
  {
    noteNumber: 7,
    numeral: "Ⅶ",
  },
];

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
  noteNumber: NoteNumber;
  accidentalNumber: AccidentalNumber;
  quality: string | null;
};

export type ChordMetaList = (ChordMeta | null)[];

export type Duration = 4 | 8 | 16 | 6;

export type BarListItem = {
  note: NoteMeta | null;
  chord: ChordMeta | null;
};

export type BarMeta = {
  duration: Duration;
  list: BarListItem[];
};

export type TotalInfo = {
  key: Key;
  barMetaList: BarMeta[];
};
