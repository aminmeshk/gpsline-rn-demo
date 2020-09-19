import { Card, Icon, Text, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Linking,
  Platform,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { env } from '../constants/env';
import Colors from '../constants/Colors';

export interface Props {
  style?: ViewStyle;
  lat: number;
  lng: number;
  name: string;
}

const LocationCard: React.FC<Props> = (props) => {
  const [address, setAddress] = useState();

  const callAddressApi = useCallback(async () => {
    try {
      // console.log('sending call');
      const response = await fetch(
        `https://map.ir/reverse?lat=${props.lat}&lon=${props.lng}`,
        {
          headers: {
            'x-api-key': env.mapIrApiKey,
          },
        },
      );
      if (!response.ok) {
        return;
      }
      const body = await response.json();
      if (body.address) {
        return;
      }
      setAddress(body.address);
    } catch (err) {
      console.log(err);
    }
  }, [props.lng, props.lat, setAddress]);

  useEffect(() => {
    callAddressApi();
  }, [callAddressApi]);

  const openGoogleMapsHandler = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${props.lat},${props.lng}`;
    const label = props.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    }) as string;
    Linking.openURL(url);
  };

  return (
    <Card style={{ ...styles.card, ...props.style }}>
      <View
        style={{
          ...styles.cardItem,
          ...styles.lineContainer,
        }}>
        <View style={styles.grabLine} />
      </View>
      <View style={styles.cardItem}>
        <Text style={styles.addressLabel}>آدرس:</Text>
        {!address ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Text style={styles.secondaryText}>{address}</Text>
        )}
      </View>
      <View style={styles.cardItem}>
        <Text>طول جغرافیایی:</Text>
        <Text style={{ ...styles.secondaryText, ...styles.ltr }}>
          {props.lat}
        </Text>
      </View>
      <View style={styles.cardItem}>
        <Text>عرض جغرافیایی:</Text>
        <Text style={{ ...styles.secondaryText, ...styles.ltr }}>
          {props.lng}
        </Text>
      </View>
      <View style={{ ...styles.cardItem, ...styles.noBottomBorder }}>
        <Text>نمایش نقشه در گوگل:</Text>
        <Icon
          type="Ionicons"
          name="md-open-outline"
          style={styles.icon}
          onPress={openGoogleMapsHandler}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 20,
    // opacity: 0.9,
  },
  cardItem: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  icon: {
    color: Colors.primary,
    // fontSize: 36,
  },
  secondaryText: {
    flex: 1,
    opacity: 0.6,
  },
  grabLine: {
    height: 5,
    width: 30,
    backgroundColor: '#aaa',
    borderRadius: 3,
  },
  lineContainer: {
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  addressLabel: {
    alignSelf: 'flex-start',
    marginEnd: 10,
  },
  ltr: {
    writingDirection: 'ltr',
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
});

export default LocationCard;
