import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>現在時刻</Text>
        <Text style={styles.text}>{this.state.date.toLocaleTimeString()}</Text>
        <Text style={styles.text2}>がんばれ！！！</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
  text2: {
    marginTop: 20,
    fontSize: 48,
    color: "red",
  },
});
