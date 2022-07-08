export interface iProduct {
  id?: string;
  name: string;
  price: number;
  onSale: boolean;
  category: 'Tshirt' | 'Accessories';
  stock: number;
  color: string;
  size: string;
  image: string;
}

export class Product implements iProduct {
  constructor(
    public name: string,
    public price: number,
    public onSale: boolean,
    public category: 'Tshirt' | 'Accessories',
    public stock: number,
    public color: string,
    public size: string,
    public image: string
  ) {}
}
