export class Address {
  private message: string;
  private address1: string;
  private address2: string;
  private zipCode: string;

  constructor(address: {
    shippingMessage: string;
    shippingAddress1: string;
    shippingAddress2: string;
    shippingZipCode: string;
  }) {
    this.message = address.shippingMessage;
    this.address1 = address.shippingAddress1;
    this.address2 = address.shippingAddress2;
    this.zipCode = address.shippingZipCode;
  }

  getMessage = () => {
    return this.message;
  };

  getAddress1 = () => {
    return this.address1;
  };

  getAddress2 = () => {
    return this.address2;
  };

  getZipCode = () => {
    return this.zipCode;
  };
}
