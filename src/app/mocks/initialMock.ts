import { iProduct } from '../models/product.model';
import { iShopCart } from '../models/shopcart.model';
import { iUser } from '../models/user.model';
import { AppState } from '../state/app.state';

export const mockInitialState: AppState = {
  users: {
    user: {
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    },
    token: '',
  },
  products: {
    products: [
      {
        id: '1',
        _id: '1',
        name: 'fernando',
        price: 0,
        onSale: false,
        category: 'Tshirt',
        stock: 0,
        color: '',
        size: '',
        image: 'fernando',
      },
    ],
  },
  shopcarts: {
    owner: {
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    },
  },
};
