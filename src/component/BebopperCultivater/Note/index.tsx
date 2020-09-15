import React from "react";
import { NoteDisplay } from "src/component/BebopperCultivater/Note/NoteDisplay";
import { NoteManipulate } from "src/component/BebopperCultivater/Note/NoteManipulate";
import { NoteMeta, Key } from "src/model/music/base";

type Props = {
  manipulateMode: boolean;
  note: NoteMeta | null;
  barIndex: number;
  noteIndex: number;
  musicKey: Key;
};

export const Note = (props: Props) => {
  const { manipulateMode, noteIndex, barIndex, note, musicKey } = props;

  if (manipulateMode) {
    return (
      <NoteManipulate barIndex={barIndex} note={note} noteIndex={noteIndex} />
    );
  }

  return <NoteDisplay note={note} musicKey={musicKey} />;
};
