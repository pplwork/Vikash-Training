import React, { useState, useRef ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import Card from "../components/Card";

const generateReandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateReandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = (props) => {

    const curentLow=useRef(1);
    const curentHigh=useRef(100);
    
  const [currentGuess, setCurrentGuess] = useState(
    generateReandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0)

    const {userChoice,onGameOver}=props;

  useEffect(()=>{
    if(currentGuess===props.userChoice){
        props.onGameOver(rounds)
    }
  },[currentGuess, userChoice, onGameOver])

  const nextGuess=(direction)=>{
    if((direction==="lower" && currentGuess<props.userChoice)||(direction === "higher" && props.userChoice<currentGuess)){
        Alert.alert('Dont\'t lie!','Give Him/Her proper response',[{
            text:'sorry!',
            style:'cancel'
        }])
        return;
    }
    if(direction === 'lower'){
        curentHigh.current=currentGuess;
    }else{
        curentLow.current=currentGuess;
    }

    const nextNumber=generateReandomBetween(curentLow.current,curentHigh.current,currentGuess);
    setRounds(prev=>prev+1);
    setCurrentGuess(nextNumber)

  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Card>
        <View><Text>{currentGuess}</Text></View>
      </Card>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuess.bind(this,'lower')} />
        <Button title="HIGHER" onPress={nextGuess.bind(this,'higher')}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer:{
      flexDirection:'row',
      justifyContent:'center',
      maxWidth:'80%',
      marginTop:20,
  }
});

export default GameScreen;
