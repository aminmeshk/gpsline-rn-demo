import { Card, Icon, View, Text } from 'native-base';
import React from 'react';
import {
  ColorValue,
  StyleSheet,
  TouchableNativeFeedback,
  ViewStyle,
} from 'react-native';
import { IconType } from '../models/iconType';
import myAppTheme from '../native-base-theme/variables/myAppTheme';

export interface Props {
  id: string;
  name: string;
  description: string;
  iconType?: IconType;
  iconName?: string;
  textAsIcon?: string;
  color: ColorValue;
  style?: ViewStyle;
}

const DeviceAction: React.FC<Props> = ({
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
        onPress={() => {}}
        useForeground>
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
            <View style={styles.descriptionListItem}>
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
    fontSize: myAppTheme.iconFontSize * 1.8,
    color: 'white',
    textAlign: 'center',
  },
  iconText: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: myAppTheme.DefaultFontSize * 1.7,
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
    fontSize: myAppTheme.DefaultFontSize * 0.8,
  },
});

export default DeviceAction;
