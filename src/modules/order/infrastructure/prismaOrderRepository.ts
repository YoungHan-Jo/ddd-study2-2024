import { Injectable } from '@nestjs/common';
import { Order } from '../domain/order';
import { OrderNo } from '../domain/orderNo';
import { OrderRepository } from '../domain/orderRepository';
import { PrismaClientService } from 'src/modules/common/prismaClient.service';
import { Optional } from 'typescript-optional';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prismaClient: PrismaClientService) {}

  findById = async (id: OrderNo): Promise<Optional<Order>> => {
    const foundOrder = await this.prismaClient.client.order.findUnique({
      where: {
        id: id.value,
      },
    });
    return Optional.ofNullable(new Order(foundOrder));
  };

  save = async (order: Order): Promise<void> => {
    await this.prismaClient.client.order.create({
      data: {
        receiverName: order.getShippingInfo().getReceiver().getName(),
        receiverPhoneNumber: order
          .getShippingInfo()
          .getReceiver()
          .getPhoneNumber(),
        address1: order.getShippingInfo().getAddress().getAddress1(),
        address2: order.getShippingInfo().getAddress().getAddress2(),
        zipCode: order.getShippingInfo().getAddress().getZipCode(),
      },
    });
  };

  update = async (order: Order): Promise<void> => {
    await this.prismaClient.client.order.update({
      where: {
        id: order.orderNo.value,
      },
      data: {
        receiverName: order.getShippingInfo().getReceiver().getName(),
        receiverPhoneNumber: order
          .getShippingInfo()
          .getReceiver()
          .getPhoneNumber(),
        address1: order.getShippingInfo().getAddress().getAddress1(),
        address2: order.getShippingInfo().getAddress().getAddress2(),
        zipCode: order.getShippingInfo().getAddress().getZipCode(),
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
