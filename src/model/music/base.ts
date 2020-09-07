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

export type AccidentalNumber = -1 | 0 | 1;
export type AccidentalNumberString = "-1" | "0" | "1";

type ScaleTuple = [string, string, string, string, string, string, string];

type KeyList = {
  [key in Key]: {
    [accidental in AccidentalNumberString]: ScaleTuple;
  };
};

export const KEY_LIST: KeyList = {
  Cb: {
    "-1": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "0": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
    "1": ["C", "D", "E", "F", "G", "A", "B"],
  },
  C: {
    "-1": ["B", "Db", "Eb", "E", "Gb", "Ab", "Bb"],
    "0": ["C", "D", "E", "F", "G", "A", "B"],
    "1": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
  },
  "C#": {
    "-1": ["C", "D", "E", "F", "G", "A", "B"],
    "0": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    "1": ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  Db: {
    "-1": ["C", "D", "E", "F", "G", "A", "B"],
    "0": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    "1": ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  D: {
    "-1": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    "0": ["D", "E", "F#", "G", "A", "B", "C#"],
    "1": ["D#", "F", "G", "G#", "A#", "C", "D"],
  },
  Eb: {
    "-1": ["D", "E", "Gb", "G", "A", "B", "Db"],
    "0": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    "1": ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  E: {
    "-1": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    "0": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "1": ["F", "G", "A", "A#", "C", "D", "E"],
  },
  F: {
    "-1": ["E", "Gb", "Ab", "A", "B", "Db", "Eb"],
    "0": ["F", "G", "A", "Bb", "C", "D", "E"],
    "1": ["F#", "G#", "A#", "B", "C#", "D#", "F"],
  },
  "F#": {
    "-1": ["F", "G", "A", "Bb", "C", "D", "E"],
    "0": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    "1": ["G", "A", "B", "C", "D", "E", "F#"],
  },
  Gb: {
    "-1": ["F", "G", "A", "Bb", "C", "D", "E"],
    "0": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
    "1": ["G", "A", "B", "C", "D", "E", "F#"],
  },
  G: {
    "-1": ["Gb", "Ab", "Bb", "B", "Db", "Eb", "F"],
    "0": ["G", "A", "B", "C", "D", "E", "F#"],
    "1": ["G#", "A#", "C", "C#", "D#", "F", "F#"],
  },
  Ab: {
    "-1": ["G", "A", "B", "C", "D", "E", "F#"],
    "0": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    "1": ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  A: {
    "-1": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    "0": ["A", "B", "C#", "D", "E", "F#", "G#"],
    "1": ["Bb", "C", "D", "Eb", "F", "G", "A"],
  },
  Bb: {
    "-1": ["A", "B", "Db", "D", "E", "Gb", "Ab"],
    "0": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "1": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  },
  B: {
    "-1": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "0": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    "1": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  },
};

// export type Key = keyof typeof KEY_LIST;

export type NoteNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type OctaveNumber = -1 | 0 | 1;

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

export type BarMeta = {
  noteList: NoteMetaList;
  chordList: ChordMetaList;
};
