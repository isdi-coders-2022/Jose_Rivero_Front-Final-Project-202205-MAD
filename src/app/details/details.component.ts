import { Component, Input, OnInit } from '@angular/core';
import { iProduct } from '../models/product.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local.storage.service';
import { ProductsApiService } from '../services/products.api.service';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product!: iProduct;
  quantity: number = 1;

  constructor(public store: Store<AppState>, public route: ActivatedRoute) {}

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
  }

  handleSubmit(change: string) {
    change === 'increase' ? this.quantity++ : this.quantity--;
  }
  saveHandle() {}
}
