import { Button, Card, Icon, Text, View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  Image,
  Linking,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import { env } from '../constants/env';
import Colors from '../constants/Colors';

const LocationCard = ({ style, lat, lng, name }) => {
  const window = useWindowDimensions();
  const mapImageUri = `https://map.ir/static?width=700&height=1200&zoom_level=16&markers=color:skyblue|label:${name}|${lng},${lat}`;
  const mapImageHeaders = {
    accept: 'image/png',
    'x-api-key': env.mapIrApiKey,
  };

  const openGoogleMapsHandler = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const label = { name };
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };

  return (
    <Card style={{ ...styles.card, ...style }}>
      <TouchableNativeFeedback
        onPress={openGoogleMapsHandler}
        style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={{ uri: mapImageUri, headers: mapImageHeaders }}
        />
      </TouchableNativeFeedback>
      <View style={styles.cardItem}>
        <Text>طول جغرافیایی:</Text>
        <Text style={{ writingDirection: 'ltr' }}>{lat}</Text>
      </View>
      <View style={styles.cardItem}>
        <Text>عرض جغرافیایی:</Text>
        <Text style={{ writingDirection: 'ltr' }}>{lng}</Text>
      </View>
      <View style={styles.cardItem}>
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
    borderRadius: 10,
  },
  map: {
    height: 800,
    width: 600,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
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
    fontSize: 36,
  },
});

export default LocationCard;
