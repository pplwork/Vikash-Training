import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import Goalnput from './components/Goalnput';

export default function App() {

  const [modal, setModal] = useState(false)
  const [goal, setGoal] = useState([])

  const addGoalHandler = (enteredGoal) => {
    setGoal(prev => [...prev, {id:Math.random().toString(),value:enteredGoal}])
    setModal(false)
  }
  const onDelete=(gid)=>{
    setGoal(prev=>{
      return prev.filter((goal)=>goal.id!==gid)
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={()=>setModal(true)} />
      <Goalnput setModal={setModal} addGoalHandler={addGoalHandler} modal={modal}/>
      
      {goal && <View style={{ width: '100%' }}>

        <FlatList 
        keyExtractor={(item)=>item.id}
        data={goal} 
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={onDelete} /> } 
        />
        
      </View>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
