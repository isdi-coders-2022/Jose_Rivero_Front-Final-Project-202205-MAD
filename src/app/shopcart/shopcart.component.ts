import { Component, OnInit } from '@angular/core';
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
  constructor(
    public productApi: ProductsApiService,
    public store: Store<AppState>,
    public usersApi: UsersApiService,
    public shopCartApi: ShopcartsApiService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
        },
      });
    this.store
      .select((state) => state.shopcarts)
      .subscribe({
        next: (data) => {
          this.shopcart = data.products as Array<shopProduct>;
        },
      });
  }
}
