import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Modal, TextInput } from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

export const DetailScreen = ({navigation, route}) => {
  console.log(route.params);
  // const { shop } = route.params;
  // console.log(shop)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text>I</Text>
    </View>
  );
}

const IMAGE_WIDTH = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
});
