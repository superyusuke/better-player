import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { getData, storeData } from "src/model/LocalStorage";

type Props = {};

export const LocalStorageComponent = (props: Props) => {
  const {} = props;

  return (
    <View>
      <Button
        title={"save music"}
        onPress={async () => {
          await storeData({
            key: "key1",
            value: { name: "music" },
          });
        }}
      />
      <Button
        title={"save jazz"}
        onPress={async () => {
          await storeData({
            key: "key1",
            value: { name: "jazz" },
          });
        }}
      />
      <Button
        title={"load and alert"}
        onPress={async () => {
          const res = await getData({
            key: "key1",
          });

          console.log(res);

          alert(res.name);
        }}
      />
    </View>
  );
};
