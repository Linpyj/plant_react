import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { UserScreen } from '../screens/UserScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { CreateReviewScreen } from '../screens/CreateReviewScreen';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
};

const ModalStack = () => {
  return (
    <Stack2.Navigator mode="modal">
      <Stack2.Screen name="HomeStack" component={HomeStack}  options={{ headerShown: false }}/>
      <Stack2.Screen name="CreateReview" component={CreateReviewScreen} />
    </Stack2.Navigator>
  )
}

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ModalStack" component={ModalStack} options={{ headerShown: false }} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootStackScreen;