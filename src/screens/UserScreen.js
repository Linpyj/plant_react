import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import * as firebase from 'firebase';
import "firebase/firestore";
import { ShopReviewItem } from '../components/ShopReviewItem';

export const UserScreen = ({navigation}) => {
  // const [shops, setShops] = useState([]);
  // useEffect(() => {
  //   getFirebaseItems();
  // }, [])

  // const getFirebaseItems = async() => {
  //   const snapShot = await firebase.firestore().collection("shops").get();
  //   const shops = snapShot.docs.map(doc => doc.data());
  //   setShops(shops);
  // }

  return (
    <View style={styles.container}>
      <Text>
        Userスクリーンです
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
  }
});
