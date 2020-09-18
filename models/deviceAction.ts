import { ColorValue } from 'react-native';
import { IconType } from './iconType';

class DeviceAction {
  id: string;
  name: string;
  description: string;
  iconType?: IconType;
  iconName?: string;
  color: ColorValue;
  textAsIcon?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    iconType: IconType | '',
    iconName: string,
    color: ColorValue,
    textAsIcon?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.iconType = iconType ? iconType : undefined;
    this.iconName = iconName;
    this.color = color;
    this.textAsIcon = textAsIcon;
  }
}

export default DeviceAction;
