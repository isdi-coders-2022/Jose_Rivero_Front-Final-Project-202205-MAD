import { iProduct } from './product.model';
import { iUser } from './user.model';

export interface shopProduct {
  quantity: number;
  product: iProduct;
}

export interface iShopCart {
  _id?: string;
  id?: string;
  owner: iUser;
  products?: Array<shopProduct>;
}
export interface iShopcartsState {
  shopcarts: Array<iShopCart>;
}

export class ShopCart implements iShopCart {
  constructor(public owner: iUser, public products?: Array<shopProduct>) {}
}
