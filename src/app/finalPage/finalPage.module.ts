import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalPageComponent } from './finalPage.component';
import { CoreModule } from '../core/core.module';

import { FinalPageRoutingModule } from './finalPage-routing.module';

@NgModule({
  declarations: [FinalPageComponent],
  imports: [CommonModule, CoreModule, FinalPageRoutingModule],
})
export class FinalPageModule {}
