import React from "react";
import { View, Button } from "react-native";
import { BottomSheetRef } from "src/component/BebopperCultivater";
import { Action } from "src/component/BebopperCultivater/reducer";

type Props = {
  barNumber: number | undefined;
  bottomSheetRef: BottomSheetRef;
  setState: React.Dispatch<Action>;
};

export const ManipulateBar = (props: Props) => {
  const { barNumber, bottomSheetRef, setState } = props;

  return (
    <View style={{ flexDirection: "row" }}>
      <Button
        title={"この小節を削除"}
        onPress={() => {
          if (bottomSheetRef.current) {
            setState({
              type: "deleteBar",
              payload: {
                indexOfMe: barNumber ?? 0,
                deleteBarType: "me",
              },
            });
            bottomSheetRef.current.snapTo(0);
          }
        }}
      />
      <Button
        title={"小節を挿入"}
        onPress={() => {
          if (bottomSheetRef.current) {
            setState({
              type: "addBar",
              payload: {
                indexOfMe: barNumber ?? 0,
                addBarType: "insert",
              },
            });
            bottomSheetRef.current.snapTo(0);
          }
        }}
      />
    </View>
  );
};
