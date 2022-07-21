import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iShopCart, shopProduct } from '../models/shopcart.model';
import { iUser } from '../models/user.model';
import { ProductsApiService } from '../services/products.api.service';
import { ShopcartsApiService } from '../services/shopcart.api.service';
import { UsersApiService } from '../services/users.api.service';
import { AppState } from '../state/app.state';
import { loadShopCart } from '../state/shopcart.reducer/shopcart.action.creators';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css'],
})
export class ShopcartComponent implements OnInit {
  user!: iUser;
  shopcart!: Array<shopProduct>;
  newShopcart!: iShopCart;
  token!: string;
  constructor(
    public productApi: ProductsApiService,
    public store: Store<AppState>,
    public usersApi: UsersApiService,
    public shopCartApi: ShopcartsApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
          this.token = data.token;
        },
      });

    this.store
      .select((state) => state.shopcarts)
      .subscribe({
        next: (data) => {
          this.shopCartApi.getShopcart(data._id, this.token).subscribe({
            next: (data) => {
              this.shopcart = data.products as Array<shopProduct>;
              this.newShopcart = data;
            },
          });
        },
      });
  }

  checkOut() {
    let newShopCart: iShopCart = { ...this.newShopcart, products: [] };

    this.shopCartApi
      .updateProduct(newShopCart, this.newShopcart._id, this.token)
      .subscribe({
        next: (data) =>
          this.store.dispatch(loadShopCart({ shopcarts: newShopCart })),
      });
    this.router.navigate(['final']);
  }
}
