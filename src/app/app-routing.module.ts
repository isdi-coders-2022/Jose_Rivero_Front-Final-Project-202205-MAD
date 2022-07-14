import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'shopcart',
    loadChildren: () =>
      import('./shopcart/shopcart.module').then((m) => m.ShopcartModule),
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./favorite/favorite.module').then((m) => m.FavoriteModule),
  },
  /*   {
    path: 'notFound',
    loadChildren: () =>
      import('./core/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  }, */
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
