import { createAction, props } from '@ngrx/store';
import { iProduct } from 'src/app/models/product.model';

export const loadProducts = createAction(
  '[Products List] Load Products',
  props<{ products: Array<iProduct> }>()
);
export const addProduct = createAction(
  '[Products List] Add Product',
  props<{ newProduct: iProduct }>()
);
export const updateProduct = createAction(
  '[Products List] Update Product',
  props<{ id: iProduct['id']; modifiedProduct: iProduct }>()
);
export const deleteProduct = createAction(
  '[Products List] Delete Product',
  props<{ idToDelete: iProduct['id'] }>()
);
