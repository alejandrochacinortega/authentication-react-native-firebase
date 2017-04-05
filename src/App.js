import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDStfnDbp7Jv2IC4rY2LD5SfRo237GxZtc",
      authDomain: "auth-react-f1e1a.firebaseapp.com",
      databaseURL: "https://auth-react-f1e1a.firebaseio.com",
      projectId: "auth-react-f1e1a",
      storageBucket: "auth-react-f1e1a.appspot.com",
      messagingSenderId: "855778784484"
    })
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    )
  }
};

export default App;