import React from "react";
import { ChordManipulate } from "src/component/BebopperCultivater/Chord/Manipulate";
import { Key, ChordMeta } from "src/model/music/base";

type Props = {
  manipulateMode: boolean;
  chord: ChordMeta | null;
  barIndex: number;
  noteIndex: number;
  musicKey: Key;
};

export const Chord = (props: Props) => {
  const { manipulateMode, noteIndex, barIndex, chord, musicKey } = props;

  if (manipulateMode) {
    return (
      <ChordManipulate
        barIndex={barIndex}
        chord={chord}
        noteIndex={noteIndex}
      />
    );
  }

  return (
    <ChordManipulate barIndex={barIndex} chord={chord} noteIndex={noteIndex} />
  );

  // return <NoteDisplay note={note} musicKey={musicKey} />;
};
