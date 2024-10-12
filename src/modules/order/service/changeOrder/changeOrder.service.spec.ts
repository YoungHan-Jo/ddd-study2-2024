import { randomUUID } from 'crypto';
import { Order } from '../../domain/order';
import { OrderNo } from '../../domain/orderNo';
import { OrderRepository } from '../../domain/orderRepository';
import { ChangeOrderService } from './changeOrder.service';
import { ShippingInfo } from '../../domain/shippingInfo';
import { Address } from '../../domain/address';
import { Receiver } from '../../domain/receiver';
import { Optional } from 'typescript-optional';

describe('changeOrderService', () => {
  const stubRepo: OrderRepository = {
    findById: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const id = randomUUID();
  const receiverName = 'Alice';
  const receiverPhoneNumber = '070-1111-2222';
  const address1 = 'address1';
  const address2 = 'address2';
  const zipCode = '111-2222';

  const order = new Order({
    id,
    receiverName,
    receiverPhoneNumber,
    address1,
    address2,
    zipCode,
  });

  it('changeOrderService', async () => {
    // Given
    (stubRepo.findById as jest.Mock).mockResolvedValue(
      Optional.ofNullable(order),
    );

    const newReceiverName = 'Bob';
    const newReceiverPhoneNumber = '070-3333-4444';
    const newAddress1 = 'newAddress1';
    const newAddress2 = 'newAddress2';
    const newZipCode = '333-4444';

    // When
    const changeOrderService = new ChangeOrderService(stubRepo);
    const newShippingInfo = new ShippingInfo({
      receiver: new Receiver({
        name: newReceiverName,
        phoneNumber: newReceiverPhoneNumber,
      }),
      address: new Address({
        address1: newAddress1,
        address2: newAddress2,
        zipCode: newZipCode,
      }),
    });
    await changeOrderService.changeShippingInfo(
      new OrderNo(id),
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
