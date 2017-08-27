/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' 

/**+*+*+*+*+**+*+*+*+*+**+* Shared Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { SharedModule } from '../../shared/shared.module';

/**+*+*+*+*+**+*+*+*+*+**+* Brand Components +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { BrandHomeComponent } from './components/brand-home/brand-home.component';

/**+*+*+*+*+**+*+*+*+*+**+* App Routes +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { BrandRoutingModule } from './brand.routes';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrandRoutingModule,
    SharedModule
  ],
  declarations: [
    AddBrandComponent,
    BrandHomeComponent
  ]
})
export class BrandModule { }
