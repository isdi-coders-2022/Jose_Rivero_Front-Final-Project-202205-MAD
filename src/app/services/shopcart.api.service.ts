import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { iShopCart, ShopCart, shopProduct } from '../models/shopcart.model';

@Injectable({
  providedIn: 'root',
})
export class ShopcartsApiService {
  apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://localhost:4500/shopcart/';
  }

  getShopcart(id: iShopCart['id'], token: string): Observable<iShopCart> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      this.apiUrl + id,
      httpOptions
    ) as Observable<iShopCart>;
  }

  addProduct(
    product: shopProduct,
    id: iShopCart['id'],
    token: string
  ): Observable<ShopCart> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.patch(
      this.apiUrl + 'add/' + id,
      product,
      httpOptions
    ) as Observable<ShopCart>;
  }

  removeProduct(
    product: shopProduct,
    id: iShopCart['id'],
    token: string
  ): Observable<ShopCart> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.patch(
      this.apiUrl + 'remove/' + id,
      product.product.id,
      httpOptions
    ) as Observable<ShopCart>;
  }
  updateProduct(
    shopcart: iShopCart,
    id: iShopCart['id'],
    token: string
  ): Observable<ShopCart> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.patch(
      this.apiUrl + id,
      shopcart,
      httpOptions
    ) as Observable<ShopCart>;
  }
}
