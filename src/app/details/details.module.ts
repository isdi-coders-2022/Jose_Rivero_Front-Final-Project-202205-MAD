import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { CoreModule } from '../core/core.module';
import { DetailsRoutingModule } from './details-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    DetailsRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class DetailsModule {}
