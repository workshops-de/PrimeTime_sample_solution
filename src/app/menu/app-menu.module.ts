import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class AppMenuModule { }
