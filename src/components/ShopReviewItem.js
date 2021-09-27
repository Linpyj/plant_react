import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';

export const ShopReviewItem = ({navigation, shop}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail',{shop})}
      >
        <Image
          source={{ uri: shop.imageUrl }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH / 3,
    height: 115,
    margin: 1,
  }
});
