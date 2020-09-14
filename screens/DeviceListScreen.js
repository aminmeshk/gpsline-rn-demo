import { Container, Content, StyleProvider, View } from 'native-base';
import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import { devices } from '../data/dummy';
import DeviceItem from '../components/DeviceItem';
import Carousel from 'react-native-snap-carousel';

const DeviceListScreen = ({ navigation }) => {
  const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
    'window',
  );
  // const items = devices.reverse();
  const items = devices.slice().reverse();

  const renderItem = (itemData) => {
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
              // marginHorizontal: 8,
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
    // paddingVertical: 16,
  },
  deviceItem: {
    flex: 1,
  },
});

export default DeviceListScreen;
