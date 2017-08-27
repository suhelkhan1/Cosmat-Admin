import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { BrandHomeComponent } from './components/brand-home/brand-home.component';

const routes: Routes = [
    { path: 'brand-home', component: BrandHomeComponent, data: { title: 'HOME'} },
    { path: 'brand-add', component: AddBrandComponent, data: { title: 'ADD BRAND'} },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandRoutingModule {}
