import { Component, OnInit } from '@angular/core';

declare const moment: any;

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
  dateAndMonth = TimesheetComponent.formatDate(this.day);

  columns = [
    {header: 'Project', field: 'project', type: 'string'},
    {header: 'Category', field: 'category', type: 'string'},
    {header: 'Start Time', field: 'startTime', type: 'time'},
    {header: 'End Time', field: 'endTime', type: 'time'}
  ];

  private userTimeData = [
    {day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'PrimeTime', category: 'Frontend'},
    {day: 'Monday', startTime: '11:00', endTime: '14:00', project: 'Mobile App', category: 'Frontend'},
    {day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: 'Backend'},
    {day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: 'Operations'},
    {day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: 'Planning'},
    {day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'PrimeTime', category: 'Requirements'},
  ]

  private static formatDate(day: string): string {
    return moment().day(day).format('MMMM Do, YYYY');
  }

  constructor() { }

  ngOnInit(): void {
  }

  getTimesForDay(tabName: string): {}[] {
    return this.userTimeData.filter((row) => {
      return row.day === tabName;
    })
  }

  onChangeTabs(event: any) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = TimesheetComponent.formatDate(this.day);
  }
}
