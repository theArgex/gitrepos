import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sidebarService: NbSidebarService, private themeService: NbThemeService) {}
  title = 'gitrepos';
  sun = 'sun';
  moon = 'moon';
  icon = this.sun;

  items = [
    {
      title: 'Trending Repos',
      icon: 'book',
      link: '/trending',
      pathMatch: '/full'
    },
    {
      title: 'Trending Devs',
      icon: 'people',
      link: '/developer',
      pathMatch: '/full'
    },
    {
      title: 'About',
      icon: 'heart',
      link: '/about',
      pathMatch: '/full'
    },
    {
      title: 'Fork on Github',
      icon: 'github',
      url: 'https://github.com/hyraze/',
      target: '_blank',
    },
  ];

  toggle() {
    this.sidebarService.toggle(true, 'right');
     }
     collapseAll(){
      this.sidebarService.toggle(true, 'right');

     }

  changeTheme() {
    if (this.icon === this.sun) {
      this.themeService.changeTheme('default');
      this.icon = this.moon;
    } else {
      this.themeService.changeTheme('dark');
      this.icon = this.sun;
    }
  }
}
