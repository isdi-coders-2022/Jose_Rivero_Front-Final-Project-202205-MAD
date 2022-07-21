/* istanbul ignore file */
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
  templateUrl: './finalPage.component.html',
  styleUrls: ['./finalPage.component.css'],
})
export class FinalPageComponent implements OnInit {
  egg: boolean = false;

  constructor(
    public productApi: ProductsApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}
  easterEgg() {
    this.egg = true;
  }
}
