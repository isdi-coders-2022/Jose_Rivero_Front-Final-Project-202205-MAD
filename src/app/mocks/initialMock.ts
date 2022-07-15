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
        name: '',
        price: 0,
        onSale: false,
        category: 'Tshirt',
        stock: 0,
        color: '',
        size: '',
        image: '',
      },
    ],
  },
  shopcarts: {
    shopcarts: [
      {
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
            quantity: 0,
            product: {
              name: '',
              price: 0,
              onSale: false,
              category: 'Tshirt',
              stock: 0,
              color: '',
              size: '',
              image: '',
            },
          },
        ],
      },
    ],
  },
};
