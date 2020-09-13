import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import Colors from '../constants/Colors';
import { devices } from '../data/dummy';
import {
  StyleProvider,
  Text,
  Content,
  Container,
  Card,
  View,
} from 'native-base';
import LocationCard from '../components/LocationCard';

const DeviceLocationScreen = ({ navigation, route }) => {
  const { deviceId } = route.params;
  const selectedDevice = devices.find((d) => d.id === deviceId);

  return (
    <StyleProvider style={getTheme(myAppTheme)}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryDark}
        />
        <View style={styles.content}>
          <LocationCard
            style={styles.locationCard}
            lat={selectedDevice.lat}
            lng={selectedDevice.lng}
            name={selectedDevice.name}
          />
        </View>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  locationCard: {
    flex: 1,
  },
});

export default DeviceLocationScreen;
