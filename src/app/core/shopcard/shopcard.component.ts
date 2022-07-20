import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { shopProduct } from 'src/app/models/shopcart.model';
import { LocalStorageService } from 'src/app/services/local.storage.service';
import { ProductsApiService } from 'src/app/services/products.api.service';
import { ShopcartsApiService } from 'src/app/services/shopcart.api.service';

import { AppState } from 'src/app/state/app.state';
import {
  deleteProduct,
  loadShopCart,
} from 'src/app/state/shopcart.reducer/shopcart.action.creators';

@Component({
  selector: 'app-shopcard',
  templateUrl: './shopcard.component.html',
  styleUrls: ['./shopcard.component.css'],
})
export class ShopCardComponent implements OnInit {
  @Input() product!: shopProduct;
  shopCart: Array<shopProduct> = [];
  cartId!: string;

  constructor(
    public productApi: ProductsApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService,
    public shopcart: ShopcartsApiService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.shopcarts)
      .subscribe({ next: (data) => (this.cartId = data._id as string) });
  }
  removeProduct() {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.shopcart
            .removeProduct(this.product, this.cartId, data.token)
            .subscribe({ next: (data) => this.router.navigate(['home']) });
        },
      });
  }
}
