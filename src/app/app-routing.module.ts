import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/shared/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
