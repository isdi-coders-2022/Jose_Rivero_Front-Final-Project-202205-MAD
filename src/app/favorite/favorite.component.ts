import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iProduct } from '../models/product.model';
import { iUser } from '../models/user.model';
import { LocalStorageService } from '../services/local.storage.service';
import { UsersApiService } from '../services/users.api.service';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  products!: Array<iProduct>;
  user!: iUser;
  constructor(
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService,
    public userApi: UsersApiService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          this.user = data.user;
        },
      });
    this.userApi.getUser(this.user._id).subscribe({
      next: (data) => {
        this.user = data;
        this.products = data.wishList as Array<iProduct>;
      },
    });
  }
}
