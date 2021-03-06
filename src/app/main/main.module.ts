import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TimesComponent } from './times/times.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { TreeModule } from 'primeng/tree';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    ProjectsComponent,
    ValidationErrorsComponent,
    TimesComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    EditorModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule,
    RatingModule,
    CalendarModule,
    TableModule,
    DropdownModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    CalendarModule,
    TreeModule,
    TooltipModule,
    DataViewModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class MainModule { }
