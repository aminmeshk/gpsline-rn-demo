import React, { useLayoutEffect } from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';

// SplashScreen.preventAutoHideAsync();

const App = () => {
  // const [fontsLoaded] = Font.useFonts({
  //   shabnam: require('./assets/fonts/Shabnam-FD.ttf'),
  //   'shabnam-bold': require('./assets/fonts/Shabnam-Bold-FD.ttf'),
  // });

  // if (fontsLoaded) {
  //   SplashScreen.hideAsync();
  //   I18nManager.forceRTL(true);
  // } else {
  //   return null;
  // }

  useLayoutEffect(() => {
    I18nManager.forceRTL(true);
  }, [I18nManager]);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
