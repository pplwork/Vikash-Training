import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const GameOver = (props) => {
  return (
    <Card style={styles.screen}>
      <View>
        <Text>GG, GAME OVER!</Text>
        <Text>Number of Rounds: {props.numberOfRounds}</Text>
        <Button title={"NEW GAME"} onPress={props.cofigureNewGameHandle()} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
