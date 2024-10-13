import { Order as PrismaOrder } from '@prisma/client';
import { Order } from './order';
import { OrderNo } from './orderNo';
import { Orderer } from './orderer';
import { ShippingInfo } from './shippingInfo';
import { Address } from './address';
import { Receiver } from './receiver';

export class OrderFactory {
  static createOrder(data: PrismaOrder): Order {
    return new Order({
      id: data.id,
      orderer: new Orderer({
        memberId: data.ordererId,
        name: data.ordererName,
      }),
      shippingInfo: new ShippingInfo({
        message: data.shippingMessage,
        address: new Address({
          shippingMessage: data.shippingMessage,
          shippingAddress1: data.shippingAddress1,
          shippingAddress2: data.shippingAddress2,
          shippingZipCode: data.shippingZipCode,
        }),
        receiver: new Receiver({
          name: data.receiverName,
          phoneNumber: data.receiverPhoneNumber,
        }),
      }),
    });
  }
}
