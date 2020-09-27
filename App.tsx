import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Index } from "src";

// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously
import { Clipboard } from "react-native";
if (__DEV__) {
  Clipboard.setString("");
}
// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously

export default function App() {
  return (
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
}
