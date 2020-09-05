export const KEY_LIST = {
  C: {
    "-1": ["B", "Db", "Eb", "E", "Gb", "Ab", "Bb"],
    "0": ["C", "D", "E", "F", "G", "A", "B"],
    "1": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
  },
  // "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
  // Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
} as const;

export type Key = keyof typeof KEY_LIST;

export type AccidentalNumber = -1 | 0 | 1;

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
