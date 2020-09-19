import React from 'react';
import DeviceListScreen from '../screens/DeviceListScreen';
import DeviceDetailScreen from '../screens/DeviceDetailScreen';
import DeviceLocationScreen from '../screens/DeviceLocationScreen';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import myAppTheme from '../native-base-theme/variables/myAppTheme';

const defaultNavOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: myAppTheme.titleFontfamily,
    fontSize: myAppTheme.titleFontSize,
  },
  headerTintColor: 'white',
};

export type RootStackParamList = {
  DeviceList: undefined;
  DeviceDetail: { deviceId: string };
  DeviceLocation: { deviceId: string };
};

const AppStackNavigator = createStackNavigator<RootStackParamList>();

export interface Props {}

const AppNavigator: React.FC<Props> = () => {
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
