/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' 
/**+*+*+*+*+**+*+*+*+*+**+* Brand Components +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { AddBrandComponent } from './components/add-brand/add-brand.component';

/**+*+*+*+*+**+*+*+*+*+**+* App Routes +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { BrandRoutingModule } from './brand.routes';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrandRoutingModule
  ],
  declarations: [
    AddBrandComponent
  ]
})
export class BrandModule { }
