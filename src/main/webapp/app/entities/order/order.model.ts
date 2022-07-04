import { IAddress } from 'app/entities/address/address.model';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';

export interface IOrder {
  id?: number;
  orderId?: number;
  status?: OrderStatus;
  address?: IAddress | null;
}

export class Order implements IOrder {
  constructor(public id?: number, public orderId?: number, public status?: OrderStatus, public address?: IAddress | null) {}
}

export function getOrderIdentifier(order: IOrder): number | undefined {
  return order.id;
}
