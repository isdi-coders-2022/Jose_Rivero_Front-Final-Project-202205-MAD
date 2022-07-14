import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local.storage.service';
import { UsersApiService } from 'src/app/services/users.api.service';
import { AppState } from 'src/app/state/app.state';
import { loadUser } from 'src/app/state/users.reducer/user.action.creators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerData!: {
    name: string;
    email: string;
    password: string;
    address: string;
    payMethod: string;
  };
  errorMessage!: string;
  constructor(
    public userApi: UsersApiService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      address: '',
      payMethod: '',
    };
    this.errorMessage = '';
  }
  isEmail(email: string) {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return regex.test(email);
  }

  handleSubmit() {
    if (
      this.registerData.name &&
      this.registerData.email &&
      this.registerData.password &&
      this.registerData.address &&
      this.registerData.payMethod
    ) {
      {
        if (this.registerData.password.length >= 4) {
          if (this.isEmail(this.registerData.email)) {
            const newUser: iUser = {
              name: this.registerData.name,
              email: this.registerData.email,
              password: this.registerData.password,
              address: this.registerData.address,
              payMethod: this.registerData.payMethod,
              wishList: [],
            };
            this.userApi.addUser(newUser).subscribe({
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
              error: (err) => {
                this.errorMessage = 'El email ya está en uso';
              },
            });
          } else {
            this.errorMessage = 'El email es incorrecto';
          }
        } else {
          this.errorMessage =
            'La contraseña debe tener 4 caracteres como mínimo';
        }
      }
    } else {
      this.errorMessage =
        'Los campos Nombre, Email y Contraseña son obligatorios';
    }
  }
}
