import { Button, Card, Icon, Text, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  Image,
  Linking,
  Platform,
  TouchableNativeFeedback,
  PixelRatio,
} from 'react-native';
import { env } from '../constants/env';
import Colors from '../constants/Colors';

const LocationCard = ({ style, lat, lng, name }) => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [uri, setUri] = useState(
    `https://map.ir/static?width=${imageWidth}&height=${imageHeight}&zoom_level=16&markers=color:skyblue|label:${name}|${lng},${lat}`,
  );
  const mapImageHeaders = {
    accept: 'image/png',
    'x-api-key': env.mapIrApiKey,
  };

  const imageLayoutChanged = useCallback(
    (width, height) => {
      console.log(`imageLayoutChanged: ${width}, ${height}`);
      if (width === 0 || height === 0) {
        return;
      }
      if (width === imageWidth && height === imageHeight) {
        return;
      }

      if (width <= 1200 && height <= 1200) {
        width = PixelRatio.getPixelSizeForLayoutSize(width);
        height = PixelRatio.getPixelSizeForLayoutSize(height);
      }

      let newWidth;
      let newHeight;
      if (width <= 1200 && height <= 1200) {
        newWidth = width;
        newHeight = height;
      } else if (height > width) {
        newWidth = 1200 * (width / height);
        newHeight = 1200;
      } else {
        newHeight = 1200 * (height / width);
        newWidth = 1200;
      }
      setImageWidth(newWidth);
      setImageHeight(newHeight);
    },
    [imageWidth, setImageWidth, imageHeight, setImageHeight],
  );

  useEffect(() => {
    setUri(
      `https://map.ir/static?width=${imageWidth}&height=${imageHeight}&zoom_level=16&markers=color:skyblue|label:${name}|${lng},${lat}`,
    );
  }, [imageWidth, imageHeight, name, lng, lat, setUri]);

  const openGoogleMapsHandler = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const label = name;
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
        style={{ flex: 1 }}
        useForeground
        onLayout={(event) => {
          imageLayoutChanged(
            event.nativeEvent.layout.width,
            event.nativeEvent.layout.height,
          );
        }}>
        <Image
          style={styles.image}
          source={{ uri: uri, headers: mapImageHeaders }}
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
    // fontSize: 36,
  },
});

export default LocationCard;
