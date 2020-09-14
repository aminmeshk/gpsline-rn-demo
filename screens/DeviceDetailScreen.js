import React, { useLayoutEffect } from 'react';
import { StyleSheet, StatusBar, FlatList, View } from 'react-native';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';
import Colors from '../constants/Colors';
import {
  StyleProvider,
  Text,
  Content,
  Container,
  Card,
  Button,
  Icon,
} from 'native-base';
import { devices, deviceActions } from '../data/dummy';
import DeviceInfoCard from '../components/DeviceInfoCard';
import DeviceAction from '../components/DeviceAction';

const DeviceDetailScreen = ({ navigation, route }) => {
  const { deviceId } = route.params;
  const selectedDevice = devices.find((d) => d.id === deviceId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          transparent
          onPress={() => {
            navigation.navigate('DeviceLocation', { deviceId: deviceId });
          }}>
          <Icon
            type="MaterialCommunityIcons"
            name="map-marker-radius-outline"
            color="white"
            style={{ color: 'white', fontSize: myAppTheme.iconFontSize }}
          />
        </Button>
      ),
    });
  }, [navigation]);

  const renderActionItem = (itemData) => {
    return (
      <DeviceAction
        id={itemData.item.id}
        name={itemData.item.name}
        description={itemData.item.description}
        color={itemData.item.color}
        iconName={itemData.item.iconName}
        iconType={itemData.item.iconType}
        textAsIcon={itemData.item.textAsIcon}
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
          <FlatList
            ListHeaderComponent={
              <DeviceInfoCard
                style={styles.headerCard}
                name={selectedDevice.name}
                imei={selectedDevice.imei}
                car={selectedDevice.car}
                type={selectedDevice.type}
                phone={selectedDevice.phone}
                service={selectedDevice.service}
              />
            }
            data={deviceActions}
            renderItem={renderActionItem}
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
  headerCard: {
    marginTop: 0,
    marginBottom: 10,
  },
});

export default DeviceDetailScreen;
