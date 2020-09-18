import React from 'react';
import { requireNativeComponent, ViewStyle } from 'react-native';

const MyRawSimpleMapIr = requireNativeComponent('SimpleMapIr');

export interface Props {
  markerLocation: { lat: number; lng: number; zoom: number };
  style?: ViewStyle;
}

const SimpleMapIrView: React.FC<Props> = (props) => {
  return <MyRawSimpleMapIr {...props} />;
};

export default SimpleMapIrView;
