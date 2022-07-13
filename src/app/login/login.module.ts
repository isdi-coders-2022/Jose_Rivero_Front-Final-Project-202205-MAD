import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, LoginComponent],
  imports: [CommonModule, RouterModule],
})
export class LoginModule {}
