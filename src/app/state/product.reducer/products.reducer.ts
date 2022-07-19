import { createReducer, on } from '@ngrx/store';
import { iProduct } from '../../models/product.model';
import * as ac from './products.action.creators';

export const initialState = {
  products: [] as Array<iProduct>,
};

export const productsReducer = createReducer(
  initialState,
  on(ac.loadProducts, (state, { products }) => ({
    products: [...products],
  })),
  on(ac.addProduct, (state, { newProduct }) => ({
    products: [...state.products, newProduct],
  })),
  on(ac.updateProduct, (state, { modifiedProduct }) => ({
    products: state.products.map((product) =>
      product.id === modifiedProduct.id
        ? { ...product, ...modifiedProduct }
        : product
    ),
  })),
  on(ac.deleteProduct, (state, { idToDelete }) => ({
    products: state.products.filter((product) => product.id !== idToDelete),
  }))
);
