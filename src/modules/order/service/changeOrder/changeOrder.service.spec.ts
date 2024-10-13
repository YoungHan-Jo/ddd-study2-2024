import { randomUUID } from 'crypto';
import { Order } from '../../domain/order';
import { OrderNo } from '../../domain/orderNo';
import { OrderRepository } from '../../domain/orderRepository';
import { ChangeOrderService } from './changeOrder.service';
import { ShippingInfo } from '../../domain/shippingInfo';
import { Address } from '../../domain/address';
import { Receiver } from '../../domain/receiver';
import { Optional } from 'typescript-optional';
import { MemberId } from '../../domain/memberId';
import { Orderer } from '../../domain/orderer';

describe('changeOrderService', () => {
  const stubRepo: OrderRepository = {
    findById: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const orderId = randomUUID();
  const ordererId = randomUUID();
  const ordererName = 'Bob';
  const shippingMessage = 'message';
  const shippingAddress1 = 'address1';
  const shippingAddress2 = 'address2';
  const shippingZipCode = '111-2222';
  const receiverName = 'Alice';
  const receiverPhoneNumber = '070-1111-2222';

  const order = new Order({
    id: orderId,
    orderer: new Orderer({
      memberId: ordererId,
      name: ordererName,
    }),
    shippingInfo: new ShippingInfo({
      message: shippingMessage,
      address: new Address({
        shippingMessage: shippingMessage,
        shippingAddress1: shippingAddress1,
        shippingAddress2: shippingAddress2,
        shippingZipCode: shippingZipCode,
      }),
      receiver: new Receiver({
        name: receiverName,
        phoneNumber: receiverPhoneNumber,
      }),
    }),
  });

  it('changeOrderService', async () => {
    // Given
    (stubRepo.findById as jest.Mock).mockResolvedValue(
      Optional.ofNullable(order),
    );

    const newShippingMessage = 'newMessage';
    const newReceiverName = 'Bob';
    const newReceiverPhoneNumber = '070-3333-4444';
    const newAddress1 = 'newAddress1';
    const newAddress2 = 'newAddress2';
    const newZipCode = '333-4444';

    // When
    const changeOrderService = new ChangeOrderService(stubRepo);
    const newShippingInfo = new ShippingInfo({
      message: newShippingMessage,
      address: new Address({
        shippingMessage: newShippingMessage,
        shippingAddress1: newAddress1,
        shippingAddress2: newAddress2,
        shippingZipCode: newZipCode,
      }),
      receiver: new Receiver({
        name: newReceiverName,
        phoneNumber: newReceiverPhoneNumber,
      }),
    });
    await changeOrderService.changeShippingInfo(
      new OrderNo(orderId),
      newShippingInfo,
    );

    // Then
    expect(order.getShippingInfo().getReceiver()).toEqual(
      newShippingInfo.getReceiver(),
    );
    expect(order.getShippingInfo().getAddress()).toEqual(
      newShippingInfo.getAddress(),
    );
  });

  it('changeOrderService, if not found order, throw error', async () => {
    // Given
    (stubRepo.findById as jest.Mock).mockResolvedValue(
      Optional.ofNullable(null),
    );

    // When & Then
    await expect(async () => {
      const changeOrderService = new ChangeOrderService(stubRepo);
      await changeOrderService.changeShippingInfo(
        new OrderNo('NotFoundOrderNo'),
        null,
      );
    }).rejects.toThrow(Error);
  });
});
