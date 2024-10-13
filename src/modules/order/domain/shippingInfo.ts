import { Address } from './address';
import { Receiver } from './receiver';

export class ShippingInfo {
  private message: string;
  private receiver: Receiver;
  private address: Address;

  constructor(shippingInfo: {
    message: string;
    receiver: Receiver;
    address: Address;
  }) {
    this.message = shippingInfo.message;
    this.receiver = shippingInfo.receiver;
    this.address = shippingInfo.address;
  }

  getMessage = () => {
    return this.message;
  };
  getReceiver = () => {
    return this.receiver;
  };
  getAddress = () => {
    return this.address;
  };
}
