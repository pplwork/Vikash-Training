import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const Goalnput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInput = (text) => {
    setEnteredGoal(text);
  };

  return (
    <Modal visible={props.modal} animationType="slide" >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Enter You Item"
          value={enteredGoal}
          style={styles.inputContainer}
          onChangeText={goalInput}
        />
        <Button title="CANCEL" onPress={()=>props.setModal(false)} color={"red"} />
        <Button
          title="Add Item"
          onPress={() => props.addGoalHandler(enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "75%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default Goalnput;
