import { iProduct } from './product.model';

export interface shopProduct {
  quantity: number;
  product: iProduct;
}

export interface iShopCart {
  id?: string;
  owner: string;
  products?: Array<shopProduct>;
}

export class ShopCart implements iShopCart {
  constructor(public owner: string, public products?: Array<shopProduct>) {}
}
