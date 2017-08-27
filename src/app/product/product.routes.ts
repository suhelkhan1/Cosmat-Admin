import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { 
        path: 'brand',
        loadChildren: './brand/brand.module#BrandModule'
    },
    { 
        path: 'category',
        loadChildren: './category/category.module#CategoryModule'
    },
    { 
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
