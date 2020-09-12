import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DeviceListScreen from '../screens/DeviceListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'shabnam',
  },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  headerTintColor: 'white',
};

const AppStackNavigator = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <AppStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AppStackNavigator.Screen
        name="DeviceList"
        component={DeviceListScreen}
        options={{ title: 'دستگاه ها' }}
      />
    </AppStackNavigator.Navigator>
  );
};

export default AppNavigator;
