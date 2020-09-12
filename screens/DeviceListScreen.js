import {
  Card,
  Container,
  Content,
  List,
  ListItem,
  StyleProvider,
  Text,
} from 'native-base';
import React from 'react';
import { StyleSheet, StatusBar, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import { devices } from '../data/dummy';
import DeviceItem from '../components/DeviceItem';

const DeviceListScreen = (props) => {
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
        onMorePress={() => {}}
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
        <Content padder contentContainerStyle={styles.content}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={devices}
            renderItem={renderItem}
            style={styles.list}
            contentInset={[30, 0, 0, 0]}
          />
        </Content>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  list: {
    // padding: 20,
  },
});

export default DeviceListScreen;
