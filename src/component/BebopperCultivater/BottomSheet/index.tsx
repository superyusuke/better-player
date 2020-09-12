import React from "react";
import { Text, View, Button } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { useContextHook } from "src/component/BebopperCultivater";

export const BottomSheetComp = () => {
  const { bottomSheetRef, state } = useContextHook();

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
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
