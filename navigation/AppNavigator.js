import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  // headerTitleStyle: {
  //   fontFamily: 'open-sans-bold'
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  headerTintColor: 'white',
};

const AppStackNavigator = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <AppStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AppStackNavigator.Screen name="Home" component={HomeScreen} />
    </AppStackNavigator.Navigator>
  );
};

export default AppNavigator;
