import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

export const BottomSheetComp = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close aa</Text>
    </View>
  );

  const sheetRef = React.useRef<BottomSheet | null>(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            if (sheetRef.current) {
              sheetRef.current.snapTo(0);
            }
          }}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};
