import React from "react";
import { Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { useContextHook } from "src/component/BebopperCultivater";
import { State } from "src/component/BebopperCultivater/reducer";
import { Bar } from "src/component/BebopperCultivater/Bar";

const convertToBarInfo = (state: State) => {
  const { totalInfo, selected } = state;

  if (!totalInfo) {
    return null;
  }

  if (!selected?.bar) {
    return null;
  }

  const barMetaList = totalInfo.barMetaList[selected.bar - 1];

  return barMetaList;
};

export const BottomSheetComp = () => {
  const { bottomSheetRef, state } = useContextHook();

  if (!state.selected?.bar) {
    return null;
  }

  const barInfo = convertToBarInfo(state);

  if (!barInfo) {
    return null;
  }

  const barNumber = state.selected.bar;

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Button
        title={"押したら閉じる"}
        onPress={() => {
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(0);
          }
        }}
      />
      <Bar barNumber={barNumber} manipulateMode={true} bar={barInfo} />
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
