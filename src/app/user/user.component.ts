import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUser } from '../models/user.model';
import { LocalStorageService } from '../services/local.storage.service';
import { UsersApiService } from '../services/users.api.service';
import { AppState } from '../state/app.state';
import { loadShopCart } from '../state/shopcart.reducer/shopcart.action.creators';
import { loadUser } from '../state/users.reducer/user.action.creators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  viewRegister: boolean = false;
  userData: iUser = {
    name: '',
    password: '',
    email: '',
    address: '',
    payMethod: '',
  };
  errorMessage!: string;
  constructor(
    public userApi: UsersApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.users)
      .subscribe({
        next: (data) => {
          if (data.token) {
            this.userData = data.user;
            this.viewRegister = true;
          }
        },
      });
  }
  handleSubmit() {}
  handleSesion() {
    console.log(this.viewRegister);
    this.viewRegister = false;
    this.store.dispatch(
      loadUser({
        currentUser: {
          name: '',
          password: '',
          email: '',
          address: '',
          payMethod: '',
        },
        token: '',
      })
    );
    this.store.dispatch(loadShopCart({ shopcarts: { owner: this.userData } }));
    this.localStorage.clearToken();
    this.router.navigate(['home']);
  }
}
