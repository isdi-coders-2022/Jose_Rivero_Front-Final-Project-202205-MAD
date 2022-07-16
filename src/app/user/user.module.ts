import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, CoreModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
