import React, { useEffect, useState } from "react";
import { getSavedAllKeys } from "src/model/LocalStorage";

export const useLoadSavedKeys = (): [string[], boolean] => {
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAndSetLoadSavedKeys = async () => {
      try {
        const res = await getSavedAllKeys();

        if (!res) {
          setLoading(false);
          return null;
        }

        setLoading(false);

        setResult(res);
      } catch (error) {
        setLoading(false);
      }
    };

    setLoading(true);

    getAndSetLoadSavedKeys();
  }, []);

  return [result, loading];
};
