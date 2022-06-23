import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbAccordionModule, NbActionsModule,
  NbAlertModule,
  NbAutocompleteModule, NbBaseCalendarModule, NbButtonGroupModule,
  NbButtonModule,
  NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDialogModule, NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbListModule, NbPopoverModule, NbRadioModule,
  NbSelectModule, NbSpinnerModule,
  NbTabsetModule, NbTagModule, NbTimepickerModule, NbToggleModule, NbTooltipModule, NbUserModule
} from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule, NbMenuModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { CoursesNewComponent } from './components/courses-new/courses-new.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [AppComponent, CoursesNewComponent, CoursesListComponent, UserRegisterComponent, UserLoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbSelectModule,
    NbCardModule,
    NbTabsetModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbTimepickerModule,
    NbRadioModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbToggleModule,
    NbDialogModule.forChild(),
    NbAlertModule,
    NbListModule,
    NbAccordionModule,
    NbActionsModule,
    NbPopoverModule,
    NbSpinnerModule,
    NbContextMenuModule,
    NbUserModule,
    NbFormFieldModule,
    NbButtonGroupModule,
    NbBaseCalendarModule,
    NbTagModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    /*  NbThemeModule.forRoot({ name: 'default' }), */
    NbThemeModule.forRoot({
      name: window.matchMedia('(prefers-color-scheme: default)').matches
        ? 'dark'
        : 'default',
    }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
