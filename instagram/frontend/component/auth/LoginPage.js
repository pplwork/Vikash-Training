import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useRef, useEffect, Component } from "react";
import firebase from 'firebase';

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TextInput,
} from "react-native";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <View>
        <TextInput
          placeholder='Enter Your Email'
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder='Enter Your Password'
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Button title='Sign In' onPress={() => this.onSubmit()} />
      </View>
    )
  }
}

export default LoginPage