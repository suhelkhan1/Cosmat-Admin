/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**+*+*+*+*+**+*+*+*+*+**+* Shared Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { SharedModule } from '../shared/shared.module';

/**+*+*+*+*+**+*+*+*+*+**+* Products Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';

/**+*+*+*+*+**+*+*+*+*+**+* Products Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { ProductRoutingModule } from './product.routes';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrandModule,
    CategoryModule,
    ProductsModule,
    ProductRoutingModule
  ],
  declarations: []
})
export class ProductModule { }
