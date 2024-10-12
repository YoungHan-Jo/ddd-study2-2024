import { OrderNo } from './orderNo';
import { Receiver } from './receiver';
import { ShippingInfo } from './shippingInfo';
import { Order as PrismaOrder } from '@prisma/client';

export class Order {
  private id: OrderNo;
  private shippingInfo: ShippingInfo;

  constructor(order: {
    id: string;
    receiverName: string;
    receiverPhoneNumber: string;
    address1: string;
    address2: string;
    zipCode: string;
  }) {
    this.id = new OrderNo(order.id);
  }

  get orderNo(): OrderNo {
    return this.id;
  }

  getShippingInfo = (): ShippingInfo => {
    return this.shippingInfo;
  };

  changeShippingInfo = (newShippingInfo: ShippingInfo) => {
    this.shippingInfo = newShippingInfo;
  };
}
