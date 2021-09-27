import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";
import { TextArea } from '../components/TextArea';

export const CreateReviewScreen = ({navigation}) => {
  const [ text, setText ] = useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Text style={styles.formLabel}>やること</Text>
      <TextInput
        style={styles.formControl}
        value={text}
        multiline
        placeholder="何かやること"
        onChangeText={(text) => {
          setText(text);
        }}
      />
      <Button
        title="保存します"
        mode="contained"
      />
    </KeyboardAvoidingView>
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
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: '80%',
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  }
});
