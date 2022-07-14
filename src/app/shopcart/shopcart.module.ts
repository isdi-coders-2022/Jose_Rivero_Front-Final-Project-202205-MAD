import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopcartComponent } from './shopcart.component';
import { ShopcartRoutingModule } from './shopcart-routing-module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ShopcartComponent],
  imports: [CommonModule, CoreModule, ShopcartRoutingModule],
})
export class ShopcartModule {}
