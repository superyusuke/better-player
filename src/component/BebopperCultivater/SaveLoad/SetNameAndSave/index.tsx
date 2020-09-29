import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import { saveTotalInfo } from "src/model/LocalStorage";
import { useContextHook } from "src/component/BebopperCultivater";

type Props = {
  getAndSet: () => Promise<void>;
};

export const SetNameAndSave = (props: Props) => {
  const { getAndSet } = props;

  const [textValue, setTextVale] = useState("");

  const { state } = useContextHook();

  if (state.totalInfo === null) {
    return null;
  }

  const dataToSave = state.totalInfo;

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setTextVale(text)}
        value={textValue}
      />
      <Button
        title={"保存"}
        onPress={async () => {
          await saveTotalInfo({
            saveKey: textValue,
            totalInfo: dataToSave,
          });
          await getAndSet();
          setTextVale("");
        }}
      />
      <Text>SetNameAndSave</Text>
    </View>
  );
};
