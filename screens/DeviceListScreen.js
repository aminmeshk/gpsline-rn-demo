import { Container, Content, StyleProvider, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';
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

  const [width, setWidth] = useState(viewportWidth);

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
          {/* <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={devices}
            renderItem={renderItem}
            style={styles.list}
            contentInset={[30, 0, 0, 0]}
          /> */}
          <Carousel
            data={devices.reverse()}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width * 0.9}
            slideStyle={{ width: width * 0.9 }}
            layout={'default'}
            inactiveSlideShift={0}
            inactiveSlideScale={0.8}
            inactiveSlideOpacity={0.5}
            onLayout={() => {
              setWidth(Dimensions.get('window').width);
            }}
          />
        </View>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  deviceItem: {
    flex: 1,
  },
});

export default DeviceListScreen;
