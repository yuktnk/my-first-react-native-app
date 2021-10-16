import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Hagiwara" />
      <StatusBar style="auto" />
    </View>
  );
}

function Welcome(props) {
  return <Text>Hello, {props.name}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "red",
  },
});
