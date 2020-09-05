import { NoteMeta, NoteMetaList } from "src/model/music/base";
import { convertNoteMetaToMappedNote } from "src/model/music/convert/toMappedNote/convertNoteMetaToMappedNote";
import { convertNoteMetaListToMappedNoteList } from "src/model/music/convert/toMappedNote/convertNoteMetaListToMappedNoteList";

//
// const note2: Note = {
//   number: 1,
//   accidental: 1,
// };
//
// const note3: Note = {
//   number: 1,
//   accidental: -1,
// };

describe("aa", () => {
  it("is", async () => {
    const note: NoteMeta = {
      noteNumber: 2,
      accidentalNumber: -1,
      octaveNumber: -1,
    };

    const res = convertNoteMetaToMappedNote({ key: "C", noteMeta: note });
    console.log(res);
  });

  it("2", async () => {
    const noteMetaList: NoteMetaList = [
      {
        noteNumber: 2,
        accidentalNumber: -1,
        octaveNumber: -1,
      },
      null,
      {
        noteNumber: 4,
        accidentalNumber: 1,
        octaveNumber: 1,
      },
      {
        noteNumber: 6,
        accidentalNumber: -1,
        octaveNumber: 0,
      },
    ];

    const res = convertNoteMetaListToMappedNoteList({
      key: "C",
      noteMetaList: noteMetaList,
    });
    console.log(res);
  });
});
