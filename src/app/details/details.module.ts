import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { CoreModule } from '../core/core.module';
import { DetailsRoutingModule } from './details-routing-module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, CoreModule, DetailsRoutingModule],
})
export class DetailsModule {}
