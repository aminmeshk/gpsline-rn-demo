import { Card, Icon, View, Text, ListItem } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';

const DeviceAction = ({
  id,
  name,
  description,
  iconType,
  iconName,
  textAsIcon,
  color,
  style,
}) => {
  return (
    <Card style={{ ...styles.card, ...style }}>
      <TouchableNativeFeedback
        style={styles.touchable}
        onPress={() => {
          console.log('hello' + new Date().toISOString());
        }}>
        <View style={styles.container}>
          <View style={{ ...styles.iconContainer, backgroundColor: color }}>
            {iconType ? (
              <Icon type={iconType} name={iconName} style={styles.icon} />
            ) : (
              <Text style={styles.iconText}>{textAsIcon}</Text>
            )}
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.titleListItem}>
              <Text>{name}</Text>
            </View>
            <View style={styles.descriptionListItem} noBorder>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
    borderRadius: 10,
    overflow: 'hidden',
    // marginHorizontal: 0,
    marginStart: 20,
    marginEnd: 20,
    marginRight: 20,
    marginLeft: 20,
    // marginHorizontal: 20,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  iconText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  bodyContainer: {
    flex: 4,
  },
  titleListItem: {
    paddingTop: 16,
    marginStart: 16,
    paddingBottom: 16,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginEnd: 30,
  },
  descriptionListItem: {
    paddingTop: 0,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 10,
  },
  description: {
    opacity: 0.6,
    fontSize: 13,
  },
});

export default DeviceAction;
