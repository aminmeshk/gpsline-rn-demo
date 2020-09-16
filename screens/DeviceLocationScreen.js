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
import SimpleMapIrView from '../nativeModules/SimpleMapIrView';

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
          {/* <LocationCard
            style={styles.locationCard}
            lat={selectedDevice.lat}
            lng={selectedDevice.lng}
            name={selectedDevice.name}
          /> */}
          <SimpleMapIrView
            style={styles.map}
            markerLocation={{
              lat: selectedDevice.lat,
              lng: selectedDevice.lng,
              zoom: 15,
            }}
          />
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
    padding: 0,
  },
  map: {
    flex: 1,
  },
  locationCard: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default DeviceLocationScreen;
