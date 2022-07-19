import { createAction, props } from '@ngrx/store';

import { iShopCart } from '../../models/shopcart.model';

export const loadShopCart = createAction(
  '[Products List] Load ShopCart',
  props<{ shopcarts: iShopCart }>()
);
export const addProduct = createAction(
  '[Products List] Add Product',
  props<{ newProduct: iShopCart }>()
);
export const updateProduct = createAction(
  '[Products List] Update Product',
  props<{ id: iShopCart['id']; modifiedProduct: iShopCart }>()
);
export const deleteProduct = createAction(
  '[Products List] Delete Product',
  props<{ idToDelete: iShopCart['id'] }>()
);
