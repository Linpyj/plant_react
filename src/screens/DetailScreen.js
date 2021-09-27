import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Modal, TextInput } from 'react-native';
import { FloatingActionButton} from '../components/FloatingActionButton';
// import { CreateReviewScreen } from '../components/CreateReviewScreen';

export const DetailScreen = ({navigation, route}) => {
  const { shop } = route.params;

  return (
    <View>
      <Image
        source={{ uri: shop.imageUrl }}
        style={{ width: "100%", height: "50%" }}
      />
      <Text
        style={{ fontWeight: "bold", fontSize: 30, marginTop: 10, marginLeft: 10 }}
      >
        {shop.name}
      </Text>
      <Text
        style={{ fontSize: 15, marginTop: 10, marginLeft: 10 }}
      >
        {shop.place}
      </Text>
      <FloatingActionButton
        iconName="plus"
        onPress = {() => {
          navigation.navigate("CreateReview", {shop})
        }}
      />
    </View>
  );
}

const IMAGE_WIDTH = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
});
