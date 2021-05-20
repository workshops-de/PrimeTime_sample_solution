import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Main',
        items: [
          {label: 'Dashboard', icon: PrimeIcons.HOME, routerLink: ['/main/dashboard']},
          {
            label: 'Times',
            icon: PrimeIcons.CALENDAR,
            routerLink: ['/main/times']
          },
          {
            label: 'Timesheet',
            icon: PrimeIcons.CLOCK,
            routerLink: ['/main/timesheet'],
          },
          {label: 'Projects', icon: PrimeIcons.CHECK_SQUARE, routerLink: ['/main/projects']},
          {label: 'Settings', icon: PrimeIcons.COG, routerLink: ['/main/settings']},
        ]
      }
    ];
  }
}
