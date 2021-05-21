Adding your first "real" component requires a few preliminary steps for keeping your source code organised:

1. Add a new 'Main' module: `ng g m Main`
2. Generate a new component inside this module: `ng g c main/Projects`
3. For easy access via links and lazy-loading behaviour, add child routes for the new 'Main' module (`src/app/main/main-routing.module.ts`):

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
```

4. Add these child routes to your `app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
];
```
