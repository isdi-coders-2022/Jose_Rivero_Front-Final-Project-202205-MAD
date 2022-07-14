import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../services/local.storage.service';
import { UsersApiService } from '../services/users.api.service';
import { AppState } from '../state/app.state';
import { loadUser } from '../state/users.reducer/user.action.creators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  viewRegister!: boolean;
  constructor(
    public userApi: UsersApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    const token = this.localStorage.getToken();
    if (token) {
      this.userApi.loginUser(undefined, token).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              loadUser({
                currentUser: data.user,
                token: data.token,
              })
            );
            this.localStorage.saveToken(data.token);
            this.router.navigate(['home']);
          }
        },
      });
    }

    this.viewRegister = false;
  }

  toggleRegister() {
    this.viewRegister = !this.viewRegister;
  }
}
