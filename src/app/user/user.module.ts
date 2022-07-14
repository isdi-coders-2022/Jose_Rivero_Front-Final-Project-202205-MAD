import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing-module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, CoreModule, UserRoutingModule],
})
export class UserModule {}
