import React from "react";
import { NoteDisplay } from "src/component/BebopperCultivater/Note/NoteDisplay";
import { NoteManipulate } from "src/component/BebopperCultivater/Note/NoteManipulate";
import { NoteMeta } from "src/model/music/base";

type Props = {
  manipulateMode: boolean;
  note: NoteMeta | null;
  barIndex: number;
  noteIndex: number;
};

export const Note = (props: Props) => {
  const { manipulateMode, noteIndex, barIndex, note } = props;

  if (manipulateMode) {
    return (
      <NoteManipulate
        manipulateMode={manipulateMode}
        barIndex={barIndex}
        note={note}
        noteIndex={noteIndex}
      />
    );
  }

  return (
    <NoteDisplay
      manipulateMode={manipulateMode}
      barIndex={barIndex}
      note={note}
      noteIndex={noteIndex}
    />
  );
};
