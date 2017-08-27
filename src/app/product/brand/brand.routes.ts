import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddBrandComponent } from './components/add-brand/add-brand.component';

const routes: Routes = [
    { path: 'add-brand', component: AddBrandComponent, data: { title: 'ADD BRAND'} },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandRoutingModule {}
