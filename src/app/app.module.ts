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
import { HomeComponent } from './home/home.component';
import { NbSidebarModule, NbMenuModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [AppComponent, HomeComponent],

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
