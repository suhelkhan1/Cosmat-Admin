import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LayoutsModule } from './layouts/layouts.module'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren:  './dashboard/dashboard.module#DashboardModule',
    data: { title: 'HOME'}
  },
  {
    path: 'product',
    loadChildren:  './product/product.module#ProductModule',
    data: { title: 'PRODUCTS'}
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
