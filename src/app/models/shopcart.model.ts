interface shopProduct {
  product: string;
  quantity: number;
}

export interface iProduct {
  id?: string;
  products?: Array<shopProduct>;
  owner: string;
}

export class Product implements iProduct {
  constructor(public owner: string, public products?: Array<shopProduct>) {}
}
