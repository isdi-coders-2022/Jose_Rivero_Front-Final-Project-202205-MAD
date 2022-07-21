import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../models/product.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../state/app.state';
import { ShopcartsApiService } from '../services/shopcart.api.service';
import { loadShopCart } from '../state/shopcart.reducer/shopcart.action.creators';
import { iShopCart } from '../models/shopcart.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product!: iProduct;
  quantity: number = 1;
  cart!: iShopCart;
  token!: string;

  constructor(
    public store: Store<AppState>,
    public route: ActivatedRoute,
    public shopCartApi: ShopcartsApiService
  ) {}

  ngOnInit(): void {
    let idProd = this.route.snapshot.paramMap.get('id') as string;

    this.store
      .select((state) => state.products)
      .subscribe({
        next: (data) => {
          this.product = data.products.find(
            (item) => item._id === idProd
          ) as iProduct;
        },
      });

    this.store
      .select((state) => state.users)
      .subscribe({ next: (data) => (this.token = data.token) });
    this.store
      .select((state) => state.shopcarts)
      .subscribe({
        next: (data) => (this.cart = data as iShopCart),
      });
    console.log(this.product);
  }

  handleSubmit(change: string) {
    change === 'increase' ? this.quantity++ : this.quantity--;
  }
  saveHandle() {
    this.shopCartApi
      .addProduct(
        {
          quantity: this.quantity,
          product: this.product,
        },
        this.cart._id,
        this.token
      )
      .subscribe({
        next: (data) =>
          this.store.dispatch(
            loadShopCart({ shopcarts: { ...this.cart, ...data } })
          ),
      });
  }
}
