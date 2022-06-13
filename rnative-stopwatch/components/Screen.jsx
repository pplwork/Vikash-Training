import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { TIME } from '../redux/constants'

const Screen = () => {

  const data = useSelector(state => state.watch)
  const dispatch = useDispatch();

  const { isActive, isPaused, lap, time } = useSelector(state => state.watch);
  // console.log(data)

  let laps = [];

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        dispatch({ type: TIME })
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isActive]);

  return (
    <View style={styles.screen}>

      <View style={styles}>
        <Text>Stop watch</Text>
      </View>

      <View style={styles.display}>
        <Text style={styles.text}>{("0"+Math.floor((time/60000)%60)).slice(-2)}m:</Text>
        <Text style={styles.text}>{("0"+Math.floor((time/1000)%60)).slice(-2)}s:</Text>
        <Text style={styles.text}>{("0"+Math.floor((time/10)%100)).slice(-2)}</Text>
      </View>

    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '20%',
    textAlign: 'center',
    backgroundColor: '#ffe4db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    width: '80%',
    height:'50%',
    flexDirection:'row',
    textAlign: 'center',
    backgroundColor: '#c9fcff',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:600,
  }
});