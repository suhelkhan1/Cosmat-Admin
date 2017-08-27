/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**+*+*+*+*+**+*+*+*+*+**+* 3rd Party Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

/**+*+*+*+*+**+*+*+*+*+**+* Componenets +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

/**+*+*+*+*+**+*+*+*+*+**+* Directives +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { AsideToggleDirective } from './directives/aside/aside.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './directives/sidebar/sidebar.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
  ],
  declarations: [
    BreadcrumbsComponent,
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    ChartsModule,
    BreadcrumbsComponent,
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
  ]
})
export class SharedModule { }
