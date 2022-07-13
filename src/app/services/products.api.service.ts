import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  apiUrl: string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://localhost:4500/products/';
  }

  getProducts(): Observable<Array<iProduct>> {
    return this.http.get(this.apiUrl) as Observable<Array<iProduct>>;
  }

  getProduct(id: iProduct['id']): Observable<Array<iProduct>> {
    return this.http.get(this.apiUrl + id) as Observable<Array<iProduct>>;
  }

  addProduct(document: iProduct): Observable<iProduct> {
    return this.http.post(this.apiUrl, document) as Observable<iProduct>;
  }

  updateProduct(id: iProduct['id'], product: Product): Observable<Product> {
    return this.http.patch(this.apiUrl + id, product) as Observable<Product>;
  }
  deleteProduct(id: iProduct['id']): Observable<Product> {
    return this.http.delete(this.apiUrl + id) as Observable<Product>;
  }
}
