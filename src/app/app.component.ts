import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUser } from './models/user.model';
import { LocalStorageService } from './services/local.storage.service';
import { ProductsApiService } from './services/products.api.service';
import { UsersApiService } from './services/users.api.service';
import { AppState } from './state/app.state';
import { loadUser } from './state/users.reducer/user.action.creators';
import * as acProduct from './state/product.reducer/products.action.creators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tumbao Caribeño';
  constructor(
    public localStorage: LocalStorageService,
    public store: Store<AppState>,
    public usersApi: UsersApiService,
    public productsApi: ProductsApiService
  ) {}
  ngOnInit(): void {
    let token = this.localStorage.getToken();
    if (token) {
      this.usersApi.loginUser(undefined, token).subscribe({
        next: (data) =>
          this.store.dispatch(
            loadUser({ currentUser: data.user, token: data.token })
          ),
        error: (err) => {
          this.localStorage.clearToken();
        },
      });
    }
    this.productsApi.getProducts().subscribe({
      next: (data) =>
        this.store.dispatch(acProduct.loadProducts({ products: data })),
    });
  }
}
