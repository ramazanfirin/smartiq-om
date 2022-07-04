import { IOrder } from 'app/entities/order/order.model';

export interface IAddress {
  id?: number;
  name?: string;
  city?: string;
  district?: string;
  details?: string;
  orders?: IOrder[] | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public name?: string,
    public city?: string,
    public district?: string,
    public details?: string,
    public orders?: IOrder[] | null
  ) {}
}

export function getAddressIdentifier(address: IAddress): number | undefined {
  return address.id;
}
