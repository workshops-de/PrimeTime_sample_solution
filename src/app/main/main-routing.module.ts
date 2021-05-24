import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { TimesComponent } from './times/times.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'times', component: TimesComponent},
  {path: 'timesheet', component: TimesheetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
