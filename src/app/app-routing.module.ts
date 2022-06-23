import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesNewComponent } from './components/courses-new/courses-new.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses-new',
    component: CoursesNewComponent,
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', redirectTo: 'courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
