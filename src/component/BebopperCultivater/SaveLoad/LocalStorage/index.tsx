import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { useContextHook } from "src/component/BebopperCultivater";

import { removeOfTargetKey } from "src/model/LocalStorage/basicMethod";
import { saveTotalInfo, loadTotalInfo } from "src/model/LocalStorage";

import { useLoadSavedKeys } from "src/component/BebopperCultivater/SaveLoad/LocalStorage/useLoadSavedKeys";

type Props = {};

export const LocalStorageComponent = (props: Props) => {
  const { state, setState } = useContextHook();

  if (state.totalInfo === null) {
    return null;
  }

  const dataToSave = state.totalInfo;

  const {} = props;

  const [result, loading] = useLoadSavedKeys();

  return (
    <View style={{ flexDirection: "row" }}>
      {result
        ? result.map((o) => (
            <Button
              key={o}
              title={`delete ${o}`}
              onPress={async () => {
                await removeOfTargetKey({ targetKey: o });
              }}
            />
          ))
        : null}
      {result
        ? result.map((o) => (
            <Button
              key={o}
              title={`load ${o}`}
              onPress={async () => {
                const res = await loadTotalInfo({ savedKey: o });
                setState({
                  type: "setInitialFetchedData",
                  payload: {
                    barMetaList: res.barMetaList,
                    key: res.key,
                  },
                });
              }}
            />
          ))
        : null}
      <Button
        title={"save now info"}
        onPress={async () => {
          await saveTotalInfo({
            saveKey: "key1",
            totalInfo: dataToSave,
          });
        }}
      />
      {/*  title={"load and alert"}*/}
      {/*  onPress={async () => {*/}
      {/*    const res = await getData({*/}
      {/*      key: "key1",*/}
      {/*    });*/}

      {/*    console.log(res);*/}

      {/*    alert(res.name);*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};
