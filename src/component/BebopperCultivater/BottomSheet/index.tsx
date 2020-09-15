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
  const { bottomSheetRef, state, setState } = useContextHook();

  const barInfo = convertToBarInfo(state);

  const barNumber = state.selected?.bar;

  const musicKey = state.totalInfo?.key;

  const renderContent = () => {
    if (!barInfo) return null;

    return (
      <View
        style={{
          backgroundColor: "lightblue",
          padding: 16,
          height: "100%",
        }}
      >
        <Button
          title={"X"}
          onPress={() => {
            if (bottomSheetRef.current) {
              bottomSheetRef.current.snapTo(0);
            }
          }}
        />
        {barNumber ? (
          <Bar
            barNumber={barNumber}
            manipulateMode={true}
            bar={barInfo}
            musicKey={musicKey || "C"}
          />
        ) : null}
      </View>
    );
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[0, 300]}
      borderRadius={10}
      renderContent={renderContent}
      onCloseStart={() => {
        setState({
          type: "selectBar",
          payload: {
            targetBar: null,
          },
        });
      }}
    />
  );
};
