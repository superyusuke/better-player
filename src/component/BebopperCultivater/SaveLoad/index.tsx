import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { SetNameAndSave } from "src/component/BebopperCultivater/SaveLoad/SetNameAndSave";
import { loadTotalInfo } from "src/model/LocalStorage";
import { useContextHook } from "src/component/BebopperCultivater";
import { getSavedAllKeys } from "src/model/LocalStorage";

type Props = {};

export const SaveLoad = (props: Props) => {
  const {} = props;

  const getAndSet = async () => {
    const res = await getSavedAllKeys();
    if (!res) {
      return;
    }
    setSavedKeys(res);
  };

  const [savedKeys, setSavedKeys] = useState<string[]>([]);

  useEffect(() => {
    getAndSet();
  }, []);

  const { setState } = useContextHook();

  return (
    <SafeAreaView>
      <Text>SaveLoad</Text>
      <SetNameAndSave getAndSet={getAndSet} />
      {savedKeys.map((o, index) => {
        return (
          <View>
            <Text key={index}>{o}</Text>
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
          </View>
        );
      })}
    </SafeAreaView>
  );
};
