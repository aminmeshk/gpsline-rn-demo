import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = Font.useFonts({
    shabnam: require('./assets/fonts/Shabnam-FD.ttf'),
    'shabnam-bold': require('./assets/fonts/Shabnam-Bold-FD.ttf'),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
