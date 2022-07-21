import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from './finalPage.component';

const routes: Routes = [{ path: '', component: FinalPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalPageRoutingModule {}
