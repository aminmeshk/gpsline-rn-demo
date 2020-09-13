import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DeviceListScreen from '../screens/DeviceListScreen';
import DeviceDetailScreen from '../screens/DeviceDetailScreen';
import DeviceLocationScreen from '../screens/DeviceLocationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'shabnam',
  },
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
      <AppStackNavigator.Screen
        name="DeviceDetail"
        component={DeviceDetailScreen}
        options={{ title: 'امکانات' }}
      />
      <AppStackNavigator.Screen
        name="DeviceLocation"
        component={DeviceLocationScreen}
        options={{ title: 'موقعیت' }}
      />
    </AppStackNavigator.Navigator>
  );
};

export default AppNavigator;
