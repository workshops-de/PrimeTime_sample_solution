import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];
  day = this.daysOfWeek[0];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTabs(event: any) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
  }
}
