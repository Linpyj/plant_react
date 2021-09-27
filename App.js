import React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './src/navigations/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RootStackScreen />
  );
}

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyD--Ws1AO_3h1A30_s0ltY8luR9mxYws_w",
    authDomain: "shop-review-e8390.firebaseapp.com",
    projectId: "shop-review-e8390",
    storageBucket: "shop-review-e8390.appspot.com",
    messagingSenderId: "720205812800",
    appId: "1:720205812800:web:37c2b155bb107e635cbba5",
    measurementId: "G-5C2MF6F49X"
  };
  
  firebase.initializeApp(firebaseConfig);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
