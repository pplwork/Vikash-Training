import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [output,setOutput]=useState('open your app here')
  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <Button title="change text" onPress={()=>setOutput('the Text is changed')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
