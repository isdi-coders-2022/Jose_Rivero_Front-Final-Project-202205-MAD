import { iProduct } from './product.model';
import { iShopCart, shopProduct } from './shopcart.model';

export interface iUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  payMethod: string;
  shopCart?: iShopCart;
  wishList?: iProduct[];
}
export class User implements iUser {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public address: string,
    public payMethod: string
  ) {}
}
