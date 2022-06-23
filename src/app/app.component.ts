import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-app-courses';
  theme = 'default';

  toggleNgModel = false;

  constructor(
    private readonly themeService: NbThemeService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  changeTheme() {
    setTimeout(() => {
      !this.toggleNgModel
        ? [(this.toggleNgModel = true), (this.theme = 'dark')]
        : [(this.toggleNgModel = false), (this.theme = 'default')];

      this.themeService.changeTheme(this.theme);
    }, 0);
  }
}
