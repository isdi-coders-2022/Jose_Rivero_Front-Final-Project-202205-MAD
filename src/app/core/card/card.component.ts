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

  constructor(
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService,
    public userApi: UsersApiService
  ) {}

  ngOnInit(): void {}
  favoriteSubmit() {
    let aFavorite: Array<iProduct>;
    let token: string;
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          token = data.token;
          aFavorite = [
            ...(data.user.wishList as Array<iProduct>),
            this.product,
          ];

          this.userApi
            .updateUser(
              data.user._id,
              {
                wishList: aFavorite,
              },
              token
            )
            .subscribe({
              next: (data) => {
                this.router.navigate(['home']);
              },
            });
        },
      });
  }
}
