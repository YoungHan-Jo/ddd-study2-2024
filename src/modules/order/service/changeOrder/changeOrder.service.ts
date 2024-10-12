import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/orderRepository';
import { OrderNo } from '../../domain/orderNo';
import { ShippingInfo } from '../../domain/shippingInfo';

@Injectable()
export class ChangeOrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  changeShippingInfo = async (
    no: OrderNo,
    newShippingInfo: ShippingInfo,
  ): Promise<void> => {
    const orderOpt = await this.orderRepository.findById(no);
    const order = orderOpt.orElseThrow(() => new Error('order not found'));
    order.changeShippingInfo(newShippingInfo);

    await this.orderRepository.update(order);
  };
}
