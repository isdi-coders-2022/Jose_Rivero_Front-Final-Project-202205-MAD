import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'src/app/services/local.storage.service';
import { ShopcartsApiService } from 'src/app/services/shopcart.api.service';
import { UsersApiService } from 'src/app/services/users.api.service';
import { AppState } from 'src/app/state/app.state';
import { loadShopCart } from 'src/app/state/shopcart.reducer/shopcart.action.creators';
import { loadUser } from 'src/app/state/users.reducer/user.action.creators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginData!: { email: string; password: string };
  loginError!: boolean;
  constructor(
    public userApi: UsersApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService,
    public shopcartApi: ShopcartsApiService
  ) {}

  ngOnInit(): void {
    this.loginData = { email: '', password: '' };
    this.loginError = false;
  }

  handleSubmit() {
    if (this.loginData.email && this.loginData.password) {
      this.userApi.loginUser(this.loginData).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              loadUser({ currentUser: data.user, token: data.token })
            );
            this.localStorage.saveToken(data.token);
            this.router.navigate(['home']);
            this.shopcartApi
              .getShopcart(String(data.user.shopCart), data.token)
              .subscribe({
                next: (data) =>
                  this.store.dispatch(loadShopCart({ shopcarts: data })),
              });
          }
        },
        error: (err) => {
          this.loginError = true;
          this.loginData = { email: '', password: '' };
        },
      });
    }
  }
}
