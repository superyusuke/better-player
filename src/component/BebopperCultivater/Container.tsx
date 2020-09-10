import React, { useEffect } from "react";
import { useContextHook } from "src/component/BebopperCultivater";

import { UI } from "src/component/BebopperCultivater/UI";

export const Container = () => {
  const { state, setState, fetchedData } = useContextHook();

  useEffect(() => {
    setState({
      type: "setInitialFetchedData",
      payload: fetchedData,
    });
  }, [fetchedData]);

  if (!state.totalInfo) {
    return null;
  }

  return <UI />;
};
