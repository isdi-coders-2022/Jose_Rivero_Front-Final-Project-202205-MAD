export interface iUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  address: string;
  payMethod: string;
  shopCart?: string;
  wishList?: string[];
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
