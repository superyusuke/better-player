import React from "react";
import { View, Button, Text } from "react-native";

import { RootList } from "src/rounting";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type OtherScreenRouteProp = RouteProp<RootList, "others">;

type OtherScreenNavigationProp = StackNavigationProp<RootList, "others">;

type Props = {
  route: OtherScreenRouteProp;
  navigation: OtherScreenNavigationProp;
};

export const Other = (props: Props) => {
  const { navigation } = props;

  return (
    <View>
      <Button
        title={"to bebopper"}
        onPress={() => navigation.navigate("bebopperCultivater")}
      />
      <Text>Other ページ</Text>
    </View>
  );
};
