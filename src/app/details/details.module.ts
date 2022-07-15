import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { CoreModule } from '../core/core.module';
import { DetailsRoutingModule } from './details-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, CoreModule, DetailsRoutingModule, RouterModule],
})
export class DetailsModule {}
