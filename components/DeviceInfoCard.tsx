import { Card, CardItem, Icon, ListItem, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Colors from '../constants/Colors';

export interface Props {
  name: string;
  service: string;
  type: string;
  car: string;
  imei: string;
  phone: string;
  style?: ViewStyle;
}

const DeviceInfoCard: React.FC<Props> = (props) => {
  return (
    <Card style={{ ...styles.card, ...props.style }}>
      <CardItem bordered style={styles.headerCardItem}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.service}>{props.service}</Text>
      </CardItem>
      <CardItem style={styles.bodyCardItem}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icon
              type="MaterialCommunityIcons"
              name="google-cardboard"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{props.type}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon
              type="MaterialCommunityIcons"
              name="barcode-scan"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{props.imei}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon type="Ionicons" name="car-outline" style={styles.icon} />
            <Text style={styles.infoText}>{props.car}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon
              type="MaterialCommunityIcons"
              name="sim"
              style={styles.icon}
            />
            <Text style={styles.infoText}>{props.phone}</Text>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {},
  headerCardItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: 50,
    marginEnd: 50,
  },
  name: {
    fontSize: 18,
  },
  service: {
    opacity: 0.5,
  },
  bodyCardItem: {},
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  icon: {
    marginEnd: 10,
    opacity: 0.7,
  },
  infoItem: {
    flexDirection: 'row',
    width: '48%',
    marginBottom: 10,
  },
  infoText: {
    color: Colors.secondaryText,
    flex: 1,
    textAlign: 'left',
  },
});

export default DeviceInfoCard;
