import { NoteMetaList, Key } from "src/model/music/base";
import { convertNoteMetaToMappedNote } from "src/model/music/convert/toMappedNote/convertNoteMetaToMappedNote";

type Props = {
  noteMetaList: NoteMetaList;
  key: Key;
};

export const convertNoteMetaListToMappedNoteList = (props: Props) => {
  const { noteMetaList, key } = props;

  return noteMetaList.map((noteMeta) =>
    noteMeta
      ? convertNoteMetaToMappedNote({
          key,
          noteMeta,
        })
      : null
  );
};
