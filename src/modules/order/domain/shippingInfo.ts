import { Address } from './address';
import { Receiver } from './receiver';

export class ShippingInfo {
  private receiver: Receiver;
  private address: Address;

  constructor({ receiver, address }: { receiver: Receiver; address: Address }) {
    this.receiver = receiver;
    this.address = address;
  }

  getReceiver = () => {
    return this.receiver;
  };

  getAddress = () => {
    return this.address;
  };
}
