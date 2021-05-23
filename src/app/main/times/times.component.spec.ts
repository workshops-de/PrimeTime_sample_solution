import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesComponent } from './times.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

describe('TimesComponent', () => {
  let component: TimesComponent;
  let fixture: ComponentFixture<TimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesComponent ],
      imports: [
        TableModule,
        DropdownModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
