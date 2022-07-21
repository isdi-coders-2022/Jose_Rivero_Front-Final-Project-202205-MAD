import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iProduct } from 'src/app/models/product.model';
import { shopProduct } from 'src/app/models/shopcart.model';
import { iUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local.storage.service';
import { ProductsApiService } from 'src/app/services/products.api.service';
import { UsersApiService } from 'src/app/services/users.api.service';

import { AppState } from 'src/app/state/app.state';
import { loadUser } from 'src/app/state/users.reducer/user.action.creators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product!: iProduct;
  aFavorite!: Array<iProduct>;
  token!: string;
  user!: iUser;

  constructor(
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService,
    public userApi: UsersApiService
  ) {}

  ngOnInit(): void {}
  favoriteSubmit() {
    this.aFavorite = [];
    this.token = '';
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = { ...data.user };
          this.token = data.token;
          this.aFavorite = [
            ...(data.user.wishList as Array<iProduct>),
            this.product,
          ];
        },
      });
    this.userApi
      .updateUser(
        this.user._id,
        {
          wishList: this.aFavorite,
        },
        this.token
      )
      .subscribe({
        next: (data) =>
          this.store.dispatch(
            loadUser({ currentUser: data, token: this.token })
          ),
      });
  }
}
