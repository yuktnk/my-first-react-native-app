import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "./Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Hagiwara" />
      <Welcome name="Narisawa" />
      <Welcome name="Tanaka" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
