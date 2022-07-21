import { iProduct } from '../models/product.model';
import { iShopCart } from '../models/shopcart.model';
import { iUser } from '../models/user.model';
import { AppState } from '../state/app.state';

export const mockInitialState: AppState = {
  users: {
    user: {
      id: '1',
      _id: '1',
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    },
    token: '1',
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
    _id: 'test',
    id: 'test',
    owner: {
      name: 'fernando',
      email: 'confidencial@confidencial.com',
      password: 'confidencial',
      address: 'confidencial',
      payMethod: 'confidencial',
    },
    products: [
      {
        quantity: 10,
        product: {
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
      },
    ],
  },
};
