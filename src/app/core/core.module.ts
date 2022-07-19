import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

import { ShopCardComponent } from './shopcard/shopcard.component';
import { FavCardComponent } from './favCard/favcard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ListComponent,
    CardComponent,
    ShopCardComponent,
    FavCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ListComponent,
    CardComponent,
    ShopCardComponent,
    FavCardComponent,
  ],
})
export class CoreModule {}
