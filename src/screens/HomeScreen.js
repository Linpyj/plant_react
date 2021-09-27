import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";
import { ShopReviewItem } from '../components/ShopReviewItem';

export const HomeScreen = ({navigation}) => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getFirebaseItems();
  }, [])

  const getFirebaseItems = async() => {
    const snapShot = await firebase.firestore().collection("shops").get();
    const shops = snapShot.docs.map(doc => doc.data());
    setShops(shops);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({item}) => (
          <ShopReviewItem
            shop={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
  }
});
