import React, { useCallback, useEffect, useState } from 'react';
import { Body, Card, Text, Icon, CardItem, Button } from 'native-base';
import { StyleSheet, Image, ViewStyle } from 'react-native';
import { env } from '../constants/env';

export interface Props {
  id: string;
  name: string;
  service: string;
  car: string;
  imei: string;
  lat: number;
  lng: number;
  onItemPress?: () => void;
  onMorePress?: () => void;
  style?: ViewStyle;
}

const DeviceItem: React.FC<Props> = (props) => {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [uri, setUri] = useState(
    `https://map.ir/static?width=${imageWidth}&height=${imageHeight}&zoom_level=16&markers=color:skyblue|label:${props.name}|${props.lng},${props.lat}`,
  );

  const imageLayoutChanged = useCallback(
    (width, height) => {
      if (width === 0 || height === 0) {
        return;
      }
      if (width === imageWidth && height === imageHeight) {
        return;
      }

      if (width <= 1200 && height <= 1200) {
        width = width * 1.5;
        height = height * 1.5;
        // console.log('Actual Width: ' + width);
        // width = PixelRatio.getPixelSizeForLayoutSize(width);
        // height = PixelRatio.getPixelSizeForLayoutSize(height);
        // console.log('Pixel Width: ' + width);
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
      `https://map.ir/static?width=${imageWidth}&height=${imageHeight}&zoom_level=16&markers=color:skyblue|label:${props.name}|${props.lng},${props.lat}`,
    );
  }, [imageWidth, imageHeight, props.name, props.lng, props.lat, setUri]);

  // const mapImageUri = `https://api.neshan.org/v2/static?key=${env.neshanApiKey}&type=dreamy-gold&zoom=17&center=${lat},${lng}&width=400&height=800&marker=red`;
  const mapImageHeaders = {
    accept: 'image/png',
    'x-api-key': env.mapIrApiKey,
  };

  return (
    <Card style={{ ...styles.card, ...props.style }}>
      <Image
        style={styles.image}
        source={{ uri: uri, headers: mapImageHeaders }}
        onLayout={(event) => {
          imageLayoutChanged(
            event.nativeEvent.layout.width,
            event.nativeEvent.layout.height,
          );
        }}
      />
      <CardItem style={{ ...styles.cardItem, marginTop: 4 }}>
        <Icon
          style={styles.primaryText}
          type="MaterialCommunityIcons"
          name="google-cardboard"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.primaryText}>{props.name}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon
          style={styles.secondaryText}
          type="MaterialCommunityIcons"
          name="diamond-stone"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{props.service}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon style={styles.secondaryText} type="Ionicons" name="car-outline" />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{props.car}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon
          style={styles.secondaryText}
          type="MaterialCommunityIcons"
          name="barcode-scan"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{props.imei}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Button
          full
          primary
          style={styles.moreButton}
          onPress={props.onMorePress}>
          <Text>بیشتر</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
  },
  cardItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'flex-start',
  },
  bodyText: {
    marginStart: 6,
    flex: 1,
  },
  primaryText: {
    opacity: 0.8,
  },
  secondaryText: {
    opacity: 0.5,
  },
  moreButton: {
    flex: 1,
    borderRadius: 6,
  },
});

export default DeviceItem;
