import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iProduct } from '../models/product.model';
import { iUser } from '../models/user.model';
import { LocalStorageService } from '../services/local.storage.service';
import { ProductsApiService } from '../services/products.api.service';
import { AppState } from '../state/app.state';
import { loadProducts } from '../state/product.reducer/products.action.creators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products!: Array<iProduct>;
  user!: iUser;
  constructor(
    public productApi: ProductsApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.products)
      .subscribe({
        next: (data) => {
          this.products = data.products;
        },
      });
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
        },
      });
  }
}
