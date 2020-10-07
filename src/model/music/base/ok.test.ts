import { KEY_LIST_OLD } from "src/model/music/base/KEY_LIST_OLD";

const switchScaleNumberToPitch = (scaleNumber: number, scaleStyle: string) => {
  const toAdd =
    scaleStyle === "original"
      ? 0
      : scaleStyle === "flat"
      ? -1
      : scaleStyle === "sharp"
      ? 1
      : 0;

  switch (scaleNumber) {
    case 1: {
      return 1 + toAdd === 0 ? 12 : 1 + toAdd;
    }
    case 2: {
      return 3 + toAdd;
    }
    case 3: {
      return 5 + toAdd;
    }
    case 4: {
      return 6 + toAdd;
    }
    case 5: {
      return 8 + toAdd;
    }
    case 6: {
      return 10 + toAdd;
    }
    case 7: {
      return 12 + toAdd === 13 ? 1 : 12 + toAdd;
    }
  }
};

const converter = (keyList: typeof KEY_LIST_OLD) => {
  const list = Object.entries(keyList);

  const res = list.map((o) => {
    const list = o[1]["0"];
    const convertedList = list.map((item, index) => ({
      pitchClass: switchScaleNumberToPitch(index + 1, "original"),
      noteMapped: item,
    }));

    const listSharp = o[1]["1"];
    const convertedListSharp = listSharp.map((item, index) => ({
      pitchClass: switchScaleNumberToPitch(index + 1, "sharp"),
      noteMapped: item,
    }));

    const listFlat = o[1]["-1"];
    const convertedListFlat = listFlat.map((item, index) => ({
      pitchClass: switchScaleNumberToPitch(index + 1, "flat"),
      noteMapped: item,
    }));

    return [
      o[0],
      {
        "0": convertedList,
        "1": convertedListSharp,
        "-1": convertedListFlat,
      },
    ];
  });
  return res;
};

describe("aa", () => {
  it("is", async () => {
    const obj: any = {};
    for (const key of converter(KEY_LIST_OLD)) {
      const keyO = key[0] as any;
      obj[keyO] = key[1];
      // obj[key[0]] = key[1];
    }

    expect(obj).toBe("");
  });
});
