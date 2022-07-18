import { createReducer, on } from '@ngrx/store';

import { iShopCart } from 'src/app/models/shopcart.model';
import * as ac from './shopcart.action.creators';

export const initialState = {
  shopcarts: [] as Array<iShopCart>,
};

export const shopcartsReducer = createReducer(
  initialState,
  on(ac.loadShopCart, (state, { shopcarts }) => ({
    shopcarts: [...shopcarts],
  })),
  on(ac.addProduct, (state, { newProduct }) => ({
    shopcarts: [...state.shopcarts, newProduct],
  })),
  on(ac.updateProduct, (state, { modifiedProduct }) => ({
    shopcarts: state.shopcarts.map((product) =>
      product.id === modifiedProduct.id
        ? { ...product, ...modifiedProduct }
        : product
    ),
  })),
  on(ac.deleteProduct, (state, { idToDelete }) => ({
    shopcarts: state.shopcarts.filter((product) => product.id !== idToDelete),
  }))
);
