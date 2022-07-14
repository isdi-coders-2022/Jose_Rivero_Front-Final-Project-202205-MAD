import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { FavoriteRoutingModule } from './favorite-routing-module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, CoreModule, FavoriteRoutingModule],
})
export class FavoriteModule {}
