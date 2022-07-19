import { createReducer, on } from '@ngrx/store';

import { iShopCart, shopProduct } from '../../models/shopcart.model';
import * as ac from './shopcart.action.creators';

export const initialState = {} as iShopCart;

export const shopcartsReducer = createReducer(
  initialState,
  on(ac.loadShopCart, (state, { shopcarts }) => shopcarts),
  on(ac.addProduct, (state, { newProduct }) => ({ ...state, newProduct })),
  on(ac.updateProduct, (state, { modifiedProduct }) => ({
    ...state,
    modifiedProduct,
  })),
  on(
    ac.deleteProduct,
    (state, { idToDelete }) => (
      (state.products = (state.products as Array<shopProduct>).filter(
        (product) => product.product._id !== idToDelete
      )),
      { ...state }
    )
  )
);
