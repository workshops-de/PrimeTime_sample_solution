import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelModule } from 'primeng/panel';
import { EditorModule } from 'primeng/editor';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import { RatingModule } from 'primeng/rating';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    ProjectsComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    InputMaskModule,
    EditorModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule,
    RatingModule,
    CalendarModule
  ]
})
export class MainModule { }
