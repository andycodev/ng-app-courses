import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'ng-app-courses';
  theme = "dark";

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users'
    }
  ];

  constructor(
    private readonly sidebarService: NbSidebarService,
    private readonly themeService: NbThemeService
    ) {}

    toggle() {
      this.sidebarService.toggle(true);
      return false;
    }

  changeTheme($event:any) {
    this.theme = $event;
    this.themeService.changeTheme($event);
  }

}
