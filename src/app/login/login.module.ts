import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoginRoutingModule } from './login-routing-module';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, LoginComponent],
  imports: [CommonModule, CoreModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}
