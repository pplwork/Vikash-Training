import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { LAP, PAUSE, RESET, START } from '../redux/constants';

const Controller = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.btn}>
      <View style={styles.button}><Button color="#841584" onPress={() => {
        Alert.alert('Simple Button pressed','pressed')
        dispatch({ type: START })
      }
      } title='Start' /></View>
      <View style={styles.button}><Button color="#841584" onPress={() => dispatch({ type: PAUSE })} title='Pause' /></View>
      <View style={styles.button}><Button color="#841584" onPress={() => dispatch({ type: RESET })} title='Reset' /></View>
      <View style={styles.button}><Button color="#841584" onPress={() => dispatch({ type: LAP })} title='Add Lap' /></View>
    </View>
  )
}

export default Controller

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    // height: '10%',
    width: '100%',
    backgroundColor: '#f0edff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 1,
  },
  button: {
    width: '20%',
    margin: 2,
  }
});