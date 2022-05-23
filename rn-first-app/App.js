import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import Header from "./components/Header";
import StartGame from "./layout/StartGame";
import GameScreen from "./layout/GameScreen";
import GameOver from "./layout/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [numberOfRounds, setNumberOfRounds] = useState(0)

  const cofigureNewGameHandler=()=>{
    setNumberOfRounds(0)
    setUserNumber(null)
  }

  const startGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber);
    setNumberOfRounds(0)
  }

  const ganeOverHandler=(rounds)=>{
    setNumberOfRounds(rounds)
  }

  let conten=<StartGame onStartGame={startGameHandler}/>

  if(userNumber && numberOfRounds <=0){
    conten=<GameScreen userChoice={userNumber} onGameOver={ganeOverHandler}/>
  }else if(numberOfRounds >0){
    conten=<GameOver numberOfRounds={numberOfRounds} cofigureNewGameHandle={cofigureNewGameHandler} />
  }
  
  return (
    <View style={styles.container}>
      <Header title={"Guess my Number"} />
      {conten}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
});
