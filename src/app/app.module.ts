/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/**+*+*+*+*+**+*+*+*+*+**+* App Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { SharedModule } from './shared/shared.module'
import { LayoutsModule } from './layouts/layouts.module';
import { ProductModule } from './product/product.module';

/**+*+*+*+*+**+*+*+*+*+**+* App Component +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { AppComponent } from './app.component';

/**+*+*+*+*+**+*+*+*+*+**+* App Routes +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { AppRoutingModule } from './app.routes';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutsModule,
    ProductModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
