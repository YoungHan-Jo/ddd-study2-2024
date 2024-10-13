import { Injectable } from '@nestjs/common';
import { Order } from '../domain/order';
import { OrderNo } from '../domain/orderNo';
import { OrderRepository } from '../domain/orderRepository';
import { PrismaClientService } from 'src/modules/common/prismaClient.service';
import { Optional } from 'typescript-optional';
import { OrderFactory } from '../domain/orderFactory';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prismaClient: PrismaClientService) {}

  findById = async (id: OrderNo): Promise<Optional<Order>> => {
    const foundOrder = await this.prismaClient.client.order.findUnique({
      where: {
        id: id.value,
      },
    });
    return Optional.ofNullable(OrderFactory.createOrder(foundOrder));
  };

  save = async (order: Order): Promise<void> => {
    await this.prismaClient.client.order.create({
      data: {
        ordererId: order.getOrderer().getMemberId().value,
        ordererName: order.getOrderer().getName(),
        receiverName: order.getShippingInfo().getReceiver().getName(),
        receiverPhoneNumber: order
          .getShippingInfo()
          .getReceiver()
          .getPhoneNumber(),
        shippingMessage: order.getShippingInfo().getMessage(),
        shippingAddress1: order.getShippingInfo().getAddress().getAddress1(),
        shippingAddress2: order.getShippingInfo().getAddress().getAddress2(),
        shippingZipCode: order.getShippingInfo().getAddress().getZipCode(),
      },
    });
  };

  update = async (order: Order): Promise<void> => {
    await this.prismaClient.client.order.update({
      where: {
        id: order.orderNo.value,
      },
      data: {
        ordererId: order.getOrderer().getMemberId().value,
        ordererName: order.getOrderer().getName(),
        receiverName: order.getShippingInfo().getReceiver().getName(),
        receiverPhoneNumber: order
          .getShippingInfo()
          .getReceiver()
          .getPhoneNumber(),
        shippingMessage: order.getShippingInfo().getMessage(),
        shippingAddress1: order.getShippingInfo().getAddress().getAddress1(),
        shippingAddress2: order.getShippingInfo().getAddress().getAddress2(),
        shippingZipCode: order.getShippingInfo().getAddress().getZipCode(),
      },
    });
  };

  delete = async (order: Order): Promise<void> => {
    await this.prismaClient.client.order.delete({
      where: {
        id: order.orderNo.value,
      },
    });
  };
}
