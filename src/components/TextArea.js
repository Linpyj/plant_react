import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export const TextArea = ({value}) => {
  return (
    <View>
      <Text>{value}</Text>
      <TextInput
        value={text}
        multiline={true}
      />
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
