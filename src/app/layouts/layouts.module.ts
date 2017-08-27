/**+*+*+*+*+**+*+*+*+*+**+* Angular Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**+*+*+*+*+**+*+*+*+*+**+* Shared Modules +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { SharedModule } from '../shared/shared.module';

/**+*+*+*+*+**+*+*+*+*+**+* Layouts Component +*+*+*+**+*+*+*+*+**+*+*+*+*+**/
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule, 
        SharedModule
    ],
    declarations: [
        NavbarComponent, 
        SidebarComponent, 
        FooterComponent,
    ],
    exports: [
        NavbarComponent, 
        SidebarComponent, 
        FooterComponent,
    ],
    providers: [],
})
export class LayoutsModule {}