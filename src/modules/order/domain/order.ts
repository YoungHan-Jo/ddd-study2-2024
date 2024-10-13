import { Orderer } from './orderer';
import { OrderNo } from './orderNo';
import { ShippingInfo } from './shippingInfo';

export class Order {
  private id: OrderNo;
  private orderer: Orderer;
  private shippingInfo: ShippingInfo;

  constructor(order: {
    id: string;
    orderer: Orderer;
    shippingInfo: ShippingInfo;
  }) {
    this.id = new OrderNo(order.id);
    this.orderer = order.orderer;
    this.shippingInfo = order.shippingInfo;
  }

  get orderNo(): OrderNo {
    return this.id;
  }

  getOrderer = (): Orderer => {
    return this.orderer;
  };

  getShippingInfo = (): ShippingInfo => {
    return this.shippingInfo;
  };

  changeShippingInfo = (newShippingInfo: ShippingInfo) => {
    this.shippingInfo = newShippingInfo;
  };
}
