import React from "react";
import { Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { useContextHook } from "src/component/BebopperCultivater";
import { State } from "src/component/BebopperCultivater/reducer";

const convertToShow = (state: State) => {
  const { totalInfo, selected } = state;

  if (!totalInfo) {
    return null;
  }

  if (!selected?.bar) {
    return null;
  }

  const barMetaList = totalInfo.barMetaList[selected.bar - 1];

  const toShow = barMetaList.noteList.map((o) => o?.noteNumber);

  return toShow;
};

export const BottomSheetComp = () => {
  const { bottomSheetRef, state } = useContextHook();

  const toShow = convertToShow(state);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>{toShow}</Text>
      <Button
        title={"押したら閉じる"}
        onPress={() => {
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(0);
          }
        }}
      />
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[0, 300]}
      borderRadius={10}
      renderContent={renderContent}
    />
  );
};
