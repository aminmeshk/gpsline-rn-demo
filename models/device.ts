class Device {
  id: string;
  type: string;
  name: string;
  service: string;
  car: string;
  imei: string;
  phone: string;
  lat: number;
  lng: number;

  constructor(
    id: string,
    type: string,
    name: string,
    service: string,
    car: string,
    imei: string,
    phone: string,
    lat: number,
    lng: number,
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.service = service;
    this.car = car;
    this.imei = imei;
    this.phone = phone;
    this.lat = lat;
    this.lng = lng;
  }
}

export default Device;
