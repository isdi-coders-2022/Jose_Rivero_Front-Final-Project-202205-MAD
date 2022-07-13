import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, NavMenuComponent],
})
export class CoreModule {}
