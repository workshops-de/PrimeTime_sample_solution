import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  @ViewChild('dt') dt: Table;

  columns = [
    {header: 'User', field: 'user', type: 'string'},
    {header: 'Project', field: 'project', type: 'string'},
    {header: 'Category', field: 'category', type: 'string'},
    {header: 'Start Time', field: 'startTime', type: 'time'},
    {header: 'End Time', field: 'endTime', type: 'time'},
    {header: 'Date', field: 'date', type: 'date'}
  ];

  timesheetData = [
    {
      user: 'Glen',
      project: 'Payroll App',
      category: 'Backend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Karen',
      project: 'Agile Times',
      category: 'Frontend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Si',
      project: 'Mobile App',
      category: 'Operations',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Rohit',
      project: 'Agile Times',
      category: 'Backend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    }
  ];

  projectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];
  projects = this.projectNames.map((project) => {
    return {label: project !== '' ? project : 'all', value: project}
  });

  selectedRows: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilterGlobal($event: Event) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  onRowSelect() {
    console.log(JSON.stringify(this.selectedRows));
  }
}
