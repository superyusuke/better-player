import { NoteMeta, NoteMetaList } from "src/model/music/base";
import { convertNoteMetaToMappedNote } from "src/model/music/convert/toNoteMapped/convertNoteMetaToMappedNote";
import { convertNoteMetaListToMappedNoteList } from "src/model/music/convert/toNoteMapped/convertNoteMetaListToMappedNoteList";

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
  it("total", async () => {



  });

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
        noteNumber: 1,
        accidentalNumber: 0,
        octaveNumber: 0,
      },
      {
        noteNumber: 2,
        accidentalNumber: 0,
        octaveNumber: 0,
      },
      {
        noteNumber: 3,
        accidentalNumber: 0,
        octaveNumber: 0,
      },
      null,
      {
        noteNumber: 1,
        accidentalNumber: 1,
        octaveNumber: 0,
      },
      {
        noteNumber: 2,
        accidentalNumber: 1,
        octaveNumber: 0,
      },
      {
        noteNumber: 3,
        accidentalNumber: 1,
        octaveNumber: 0,
      },
      {
        noteNumber: 1,
        accidentalNumber: -1,
        octaveNumber: 0,
      },
      {
        noteNumber: 2,
        accidentalNumber: -1,
        octaveNumber: 0,
      },
      {
        noteNumber: 3,
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
