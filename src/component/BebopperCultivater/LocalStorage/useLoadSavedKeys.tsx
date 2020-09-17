import React, { useEffect, useState } from "react";
import { getSavedAllKeys } from "src/model/LocalStorage";

export const useLoadSavedKeys = (): [string[], string] => {
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    const getAndSetLoadSavedKeys = async () => {
      try {
        const res = await getSavedAllKeys();

        if (!res) {
          return null;
        }

        // console.log(json);
        setResult(res);
      } catch (error) {
        setLoading("null");
      }
    };

    getAndSetLoadSavedKeys();

    // if (searchBook !== "") {
    //   fetchBookList();
    // }
  }, []); //[searchBook]);

  return [result, loading];
};
