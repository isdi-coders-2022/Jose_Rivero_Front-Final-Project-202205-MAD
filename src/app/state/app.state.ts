import { ActionReducerMap } from '@ngrx/store';
import { iProductsState } from '../models/product.model';
import { iShopcartsState } from '../models/shopcart.model';
import { iUsersState } from '../models/user.model';
import { productsReducer } from './product.reducer/products.reducer';
import { shopcartsReducer } from './shopcart.reducer/shopcart.reducer';
import { usersReducer } from './users.reducer/user.reducer';

export interface AppState {
  users: iUsersState;
  products: iProductsState;
  shopcarts: iShopcartsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  products: productsReducer,
  users: usersReducer,
  shopcarts: shopcartsReducer,
};
