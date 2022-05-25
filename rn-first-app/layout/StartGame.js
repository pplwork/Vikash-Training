import React from "react";
import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import Card from "../components/Card";
import color from "../constants/color";
import Input from "../components/Input";

const StartGame = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(null)

    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler=()=>{
        setEnteredValue('')
    }
    const confirmInputHandler=()=>{
        const choseNumber=parseInt(enteredValue);
        if(isNaN(choseNumber) || choseNumber <=0 || choseNumber >99){
            Alert.alert('Invalid number!','Number has to be btwn 1-99',
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }

        setEnteredValue('')
        setConfirmed(true)
        setSelectedNumber(choseNumber)
        Keyboard.dismiss();

    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput=
        <Card style={styles.confirmText}>
            <Text >You Selected: {selectedNumber}</Text>
            <Button title="Start" onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.heading}>
                <Text style={styles.headerTitle}>Start a New Game! {props.title}</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        blurOnSubmit
                        style={styles.input}
                        autoCorrect={false}
                        maxLength={2}
                        keyboardType="number-pad"
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={color.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={color.primary} />
                        </View>
                    </View>
                </Card>
                {
                    confirmedOutput
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    heading: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        color: "black",
        fontSize: 20,
        marginVertical: 10,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        width: "80%",
        alignItems: "center",
    },
    button: {
        width: "40%",
    },
    input: {
        width: 50,
        textAlign: "center",
    },
    confirmText:{
        marginTop:20,
        backgroundColor:"gold",
        alignItems:'center'
    }
});

export default StartGame;
