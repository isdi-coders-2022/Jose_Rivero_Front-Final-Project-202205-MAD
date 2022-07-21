import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iProduct } from 'src/app/models/product.model';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  cart!: number;
  wishList!: number;
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.shopcarts)
      .subscribe({
        next: (data) => (this.cart = data.products?.length as number),
      });
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) =>
          (this.wishList = (data.user.wishList as Array<iProduct>)
            .length as number),
      });
  }
}
