import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import Colors from '../constants/Colors';
import { devices } from '../data/dummy';
import { StyleProvider, Container, View } from 'native-base';
import LocationCard from '../components/LocationCard';
import SimpleMapIrView from '../nativeModules/SimpleMapIrView';
import BottomSheet from 'reanimated-bottom-sheet';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import Device from '../models/device';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DeviceLocation'
>;

type ScreenRouteProp = RouteProp<RootStackParamList, 'DeviceLocation'>;

export interface Props {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
}

const DeviceLocationScreen: React.FC<Props> = (props) => {
  const { route } = props;
  const { deviceId } = route.params;
  const selectedDevice = devices.find((d) => d.id === deviceId) as Device;
  const renderBottomSheetContent = () => {
    return (
      <LocationCard
        style={styles.locationCard}
        lat={selectedDevice.lat}
        lng={selectedDevice.lng}
        name={selectedDevice.name}
      />
    );
  };

  return (
    <StyleProvider style={getTheme(myAppTheme)}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryDark}
        />
        <View style={styles.content}>
          <SimpleMapIrView
            style={styles.map}
            markerLocation={{
              lat: selectedDevice.lat,
              lng: selectedDevice.lng,
              zoom: 15,
            }}
          />
          <BottomSheet
            snapPoints={[230, 32]}
            renderContent={renderBottomSheetContent}
            enabledBottomInitialAnimation={true}
            enabledInnerScrolling={false}
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
    height: 500,
  },
});

export default DeviceLocationScreen;
