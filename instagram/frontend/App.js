import firebase from 'firebase/app'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useRef, useEffect, Component } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyBwf_4Os4-G0IhGDgQIHbg7Gou-wSz7mOc",
  authDomain: "instagram-demo-3a7a1.firebaseapp.com",
  projectId: "instagram-demo-3a7a1",
  storageBucket: "instagram-demo-3a7a1.appspot.com",
  messagingSenderId: "939103109330",
  appId: "1:939103109330:web:9eef392c29a92d87632d0b",
  measurementId: "G-6P10BC68VM"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TextInput,
} from "react-native";

import LandingPage from './component/auth/Landing.js';
import RegisterPage from './component/auth/Register.js';
import Main from './component/Main';
import LoginPage from './component/auth/LoginPage';
import AddScreen from './component/main/Add';
import SaveScreen from './component/main/Save';
import CommentScreen from './component/main/Comment';

const Stack = createStackNavigator();


export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Login" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />
          <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} />
          <Stack.Screen name="Comment" component={CommentScreen} navigation={this.props.navigation} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;