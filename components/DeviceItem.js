import React from 'react';
import {
  Body,
  Card,
  ListItem,
  View,
  Text,
  Icon,
  Right,
  CardItem,
  Left,
  Button,
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { env } from '../constants/env';

const DeviceItem = ({
  id,
  name,
  service,
  car,
  imei,
  lat,
  lng,
  onItemPress,
  onMorePress,
}) => {
  // const mapImageUri = `https://api.neshan.org/v2/static?key=${env.neshanApiKey}&type=dreamy-gold&zoom=17&center=${lat},${lng}&width=400&height=800&marker=red`;
  const mapImageUri = `https://map.ir/static?width=700&height=1200&zoom_level=16&markers=color:skyblue|label:${name}|${lng},${lat}`;
  const mapImageHeaders = {
    accept: 'image/png',
    'x-api-key': env.mapIrApiKey,
  };

  return (
    <Card style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: mapImageUri, headers: mapImageHeaders }}
      />
      <CardItem style={styles.cardItem}>
        <Icon
          style={styles.primaryText}
          type="MaterialCommunityIcons"
          name="google-cardboard"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.primaryText}>{name}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon
          style={styles.secondaryText}
          type="MaterialCommunityIcons"
          name="diamond-stone"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{service}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon style={styles.secondaryText} type="Ionicons" name="car-outline" />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{car}</Text>
        </Body>
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Icon
          style={styles.secondaryText}
          type="MaterialCommunityIcons"
          name="barcode-scan"
        />
        <Body style={styles.bodyText}>
          <Text style={styles.secondaryText}>{imei}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Button full primary style={styles.moreButton} onPress={onMorePress}>
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
    marginLeft: 10,
    // maxWidth: '100%',
    maxWidth: 350,
  },
  image: {
    resizeMode: 'cover',
    width: 400,
    // height: 500,
    flex: 1,
  },
  cardItem: {
    paddingTop: 4,
    paddingBottom: 4,
    alignItems: 'flex-start',
  },
  bodyText: {
    marginStart: 6,
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
