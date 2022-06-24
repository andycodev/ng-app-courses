import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesNewComponent } from './components/courses-new/courses-new.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'courses-new',
    component: CoursesNewComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'register',
    component: UserRegisterComponent,
    ...canActivate(()=> redirectLoggedInTo(['/login']))
  },
  {
    path: 'login',
    component: UserLoginComponent,
    ...canActivate(()=> redirectLoggedInTo(['/courses']))
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
