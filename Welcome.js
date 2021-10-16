import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export const Welcome = (props) => {
  return <Text style={styles.text}>Hello, {props.name}!!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      ios: "Hiragino Mincho ProN",
      android: "selif",
    }),
    fontSize: 48,
  },
});
