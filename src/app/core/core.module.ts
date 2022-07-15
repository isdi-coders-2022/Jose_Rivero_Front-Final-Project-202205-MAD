import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ListComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ListComponent,
    CardComponent,
  ],
})
export class CoreModule {}
