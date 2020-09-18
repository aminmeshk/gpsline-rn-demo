import { Container, StyleProvider, View } from 'native-base';
import React from 'react';
import { StyleSheet, StatusBar, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import { devices } from '../data/dummy';
import DeviceItem from '../components/DeviceItem';
import Carousel from 'react-native-snap-carousel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Device from '../models/device';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DeviceList'
>;

export interface Props {
  navigation: ScreenNavigationProp;
}

const DeviceListScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const items = devices.slice().reverse();

  const renderItem = (itemData: { item: Device }) => {
    return (
      <DeviceItem
        id={itemData.item.id}
        name={itemData.item.name}
        service={itemData.item.service}
        car={itemData.item.car}
        imei={itemData.item.imei}
        lat={itemData.item.lat}
        lng={itemData.item.lng}
        onItemPress={() => {}}
        onMorePress={() => {
          navigation.navigate('DeviceDetail', {
            deviceId: itemData.item.id,
          });
        }}
        style={styles.deviceItem}
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
          <Carousel
            data={items}
            renderItem={renderItem}
            sliderWidth={useWindowDimensions().width}
            itemWidth={useWindowDimensions().width * 0.95}
            slideStyle={{
              width: useWindowDimensions().width * 0.95,
              marginVertical: 8,
            }}
            layout={'default'}
            inactiveSlideShift={0}
            inactiveSlideScale={0.8}
            inactiveSlideOpacity={0.5}
            sliderHeight={useWindowDimensions().height * 0.5}
          />
        </View>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  deviceItem: {
    flex: 1,
  },
});

export default DeviceListScreen;
