import { NoteMeta, NoteMetaList, TotalInfo } from "src/model/music/base";
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
    const totalInfo: TotalInfo = {
      key: "C",
      barMetaList: [
        {
          duration: 8,
          list: [
            {
              note: {
                accidentalNumber: 0,
                noteNumber: 1,
                octaveNumber: 0,
              },
              chord: {
                noteNumber: 2,
                accidentalNumber: 0,
                quality: "M7",
              },
            },
          ],
        },
      ],
    };
  });
});
