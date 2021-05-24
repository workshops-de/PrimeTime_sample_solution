import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetComponent } from './timesheet.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { TreeModule } from 'primeng/tree';
import { RouterTestingModule } from '@angular/router/testing';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('TimesheetComponent', () => {
  let component: TimesheetComponent;
  let fixture: ComponentFixture<TimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        TabViewModule,
        TableModule,
        DialogModule,
        ButtonModule,
        StepsModule,
        CalendarModule,
        TreeModule,
        TooltipModule,
        DataViewModule,
        ConfirmDialogModule,
        ToastModule,
      ],
      providers: [
        MessageService,
        ConfirmationService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
