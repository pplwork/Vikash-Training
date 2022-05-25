import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useRef ,useEffect, Component} from "react";
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

class RegisterPage extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            name:'',
        }

        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(){
        const {email, name, password}=this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
          firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,email,
          })
            console.log(response)
        })
        .catch(err=>console.log(err))
    }


  render() {
    return (
      <View>
          <TextInput
            placeholder='Enter Your Name'
            onChangeText={(name)=>this.setState({name})}
          />
          <TextInput
            placeholder='Enter Your Email'
            onChangeText={email=>this.setState({email})}
          />
          <TextInput
            placeholder='Enter Your Password'
            secureTextEntry={true}
            onChangeText={password=>this.setState({password})}
          />
          <Button title='Signup' onPress={()=>this.onSubmit()} />
      </View>
    )
  }
}

export default RegisterPage